"use client";

import { useRef, useState } from "react";

import QuizReady from "./_Components/QuizReady";
import QuizResult from "./_Components/QuizResult";
import QuizTaking from "./_Components/QuizTaking";
import QuizWelcome from "./_Components/QuizWelcome";
import Filters from "./Filter";

// quiz States =>  select , ready , inprogress , finished

export default function QuestionContainer() {
  const swiperRef = useRef(null);
  const [quizResult, setQuizResult] = useState({
    correctAnswers: [],
    wrongAnswers: [],
  });

  const [quizState, setQuizState] = useState("ready");

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchQuiz(settings) {
    setLoading(true);
    setQuestions([]);

    const params = new URLSearchParams();

    if (settings.amount) params.append("amount", settings.amount);
    if (settings.category !== "any")
      params.append("category", settings.category);
    if (settings.difficulty) params.append("difficulty", settings.difficulty);
    if (settings.type) params.append("type", settings.type);

    const res = await fetch(`/api/quiz?${params.toString()}`);
    const data = await res.json();

    setQuestions(data.results || []);
    setLoading(false);
  }

  return (
    <>
      <div className="z-10 container mx-auto flex gap-5">
        <Filters onSubmit={fetchQuiz} />

        {loading && <p className="text-lg">Loading questions...</p>}
        {quizState === "select" && <QuizWelcome />}
        {quizState === "ready" && <QuizReady setQuizState={setQuizState} />}
        {quizState === "inprogress" && (
          <QuizTaking
            questions={questions}
            swiperRef={swiperRef}
            setQuizResult={setQuizResult}
            setQuizState={setQuizState}
          />
        )}
        {quizState === "finished" && <QuizResult />}
      </div>
    </>
  );
}
