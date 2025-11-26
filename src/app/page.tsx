"use client";

import { useState } from "react";
import QuizReady from "../Components/QuizReady";
import QuizResult from "../Components/QuizResult";
import QuizTaking from "../Components/QuizTaking";
import QuizWelcome from "../Components/QuizWelcome";
import Filters from "../Components/Filter";

export default function App() {
  const initialQuestionsState = {
    questions: [],
    correctAnswers: [],
    wrongAnswers: [],
  };

  const [questions, setQuestions] = useState(initialQuestionsState);

  /////////////////////  whole app state
  const [appState, setAppState] = useState("welcome");
  const isWelcome = appState === "welcome";
  const isLoading = appState === "loading";
  const isReady = appState === "ready";
  const isSelecting = appState === "select";
  const isInProgress = appState === "inprogress";
  const isFinished = appState === "finished";
  /////////////////////

  async function fetchQuiz(settings) {
    // setIsLoading(true);
    setAppState("loading");
    setQuestions(initialQuestionsState);

    const params = new URLSearchParams();

    if (settings.amount) params.append("amount", settings.amount);
    if (settings.category !== "any")
      params.append("category", settings.category);
    if (settings.difficulty) params.append("difficulty", settings.difficulty);
    if (settings.type) params.append("type", settings.type);

    const res = await fetch(`/api/quiz?${params.toString()}`);
    const data = await res.json();

    setQuestions((prev) => ({ ...prev, questions: data.results }));

    // prev => {...prev , prev.questions : data.result }
    // data.results || []

    // setQuestions(data.results || []);
    // setIsLoading(false);
    setAppState("ready");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      {/* ⭐ Premium Gold Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),_transparent_60%)]"></div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="z-10 container mx-auto flex gap-5">
        <Filters onSubmit={fetchQuiz} />

        {isLoading && (
          <div className="animate-pulse text-xl font-semibold text-yellow-400">
            Fetching questions...
          </div>
        )}
        {isWelcome && <QuizWelcome />}
        {isSelecting && <QuizWelcome />}
        {isReady && <QuizReady setAppState={setAppState} />}
        {isInProgress && (
          <QuizTaking
            questions={questions}
            setQuestions={setQuestions}
            setAppState={setAppState}
          />
        )}
        {isFinished && (
          <QuizResult questions={questions} setAppState={setAppState} />
        )}
      </div>
    </div>
  );
}
