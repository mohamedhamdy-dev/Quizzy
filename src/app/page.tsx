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

  //////////////////// for Testing
  // console.log( quizState);
  console.log(questions);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="z-10 container mx-auto flex gap-5">
        <Filters onSubmit={fetchQuiz} />

        {isLoading && <p className="text-lg">Loading questions...</p>}
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

//  for state management
//  if i use context

//  pros
//   no prop drilling
//   compact place management
//   handling and optimizing the state piece will be better
//   cleaner component only focus on UI and consume context

// cons
//   all components consume the context will re-render

// if i use local state lifitng
// pros

// cons
//   state change -> parent re-render -> whole app here re-render
//   prop drilling

//   if i used custom hook

//     i will have cleaner component ui will be better

// using local state if you are desingn the component
// and there is logic only needed in that component
// most like related to optionins ths comomponent
