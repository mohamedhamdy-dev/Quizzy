"use client";

import { useRef, useState } from "react";

import QuizReady from "./_Components/QuizReady";
import QuizResult from "./_Components/QuizResult";
import QuizTaking from "./_Components/QuizTaking";
import QuizWelcome from "./_Components/QuizWelcome";

// quiz States =>  select , ready , inprogress , finished

export default function QuestionContainer() {
  const swiperRef = useRef(null);
  const [quizResult, setQuizResult] = useState({
    correctAnswers: [],
    wrongAnswers: [],
  });

  const [quizState, setQuizState] = useState("ready");

  return (
    <>
      {quizState === "select" && <QuizWelcome />}
      {quizState === "ready" && <QuizReady setQuizState={setQuizState} />}
      {quizState === "inprogress" && (
        <QuizTaking
          swiperRef={swiperRef}
          setQuizResult={setQuizResult}
          setQuizState={setQuizState}
        />
      )}
      {quizState === "finished" && <QuizResult />}
    </>
  );
}
