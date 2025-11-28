"use client";

import { useState } from "react";
import QuizReady from "../Components/QuizReady";
import QuizResult from "../Components/QuizResult";
import QuizTaking from "../Components/QuizTaking";
import QuizWelcome from "../Components/QuizWelcome";
import { fixQuizData } from "@/utils/helpers";
import Loading from "@/Components/Loading";
import { QuestionsStateType } from "@/app.types";

export default function App() {
  const initialQuestionsState: QuestionsStateType = {
    questions: [],
    correctAnswers: [],
    wrongAnswers: [],
    timeTaken: 0,
  };

  const [questions, setQuestions] = useState(initialQuestionsState);

  /////////////////////  whole app state
  const [appState, setAppState] = useState("welcome");
  const isWelcome = appState === "welcome";
  const isLoading = appState === "loading";
  const isReady = appState === "ready";
  const isInProgress = appState === "inprogress";
  const isFinished = appState === "finished";
  /////////////////////

  async function fetchQuiz(settings: {
    amount: string;
    category: string;
    difficulty: string;
  }) {
    setAppState("loading");
    setQuestions(initialQuestionsState);
    const params = new URLSearchParams();

    if (settings.amount) params.append("amount", settings.amount);
    if (settings.category !== "any")
      params.append("category", settings.category);
    if (settings.difficulty) params.append("difficulty", settings.difficulty);
    params.append("type", "multiple");

    const res = await fetch(`/api/quiz?${params.toString()}`);
    const data = await res.json();

    setQuestions((prev) => ({ ...prev, questions: fixQuizData(data.results) }));
    setTimeout(() => setAppState("ready"), 2000);
  }

  return (
    <div className="z-10 container mx-auto max-w-6xl px-5">
      {isWelcome && <QuizWelcome onSubmit={fetchQuiz} />}
      {isLoading && <Loading />}
      {isReady && <QuizReady setAppState={setAppState} />}
      {isInProgress && (
        <QuizTaking
          questions={questions}
          setQuestions={setQuestions}
          setAppState={setAppState}
        />
      )}
      {isFinished && (
        <QuizResult
          questions={questions}
          setAppState={setAppState}
          setQuestions={setQuestions}
        />
      )}
    </div>
  );
}
