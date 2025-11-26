"use client";

import { useState } from "react";

export default function QuizResult({ questions, totalTime = 2, setAppState }) {
  const { correctAnswers = [], wrongAnswers = [] } = questions;

  const [showModal, setShowModal] = useState(false);

  // Counts
  const correctCount = correctAnswers.length;
  const wrongCount = wrongAnswers.length;
  const totalCount = correctCount + wrongCount;

  const accuracy =
    totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  // ⭐ Stars
  const maxStars = 3;
  const fastThreshold = 60; // 3 stars
  const mediumThreshold = 120; // 2 stars

  const stars =
    totalTime <= fastThreshold ? 3 : totalTime <= mediumThreshold ? 2 : 1;

  // Feedback
  let feedback = "Keep practicing!";
  if (accuracy === 100) feedback = "Perfect score! ⭐";
  else if (accuracy >= 80) feedback = "Excellent work!";
  else if (accuracy >= 50) feedback = "Good effort!";

  // Answer List
  const answers = [
    ...correctAnswers.map((item) => ({
      question: item.q,
      userAnswer: item.a,
      correctAnswer: item.a,
      isCorrect: true,
    })),
    ...wrongAnswers.map((item) => ({
      question: item.q,
      userAnswer: item.a,
      correctAnswer: item.correctAnswer ?? "Unknown",
      isCorrect: false,
    })),
  ];

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-6 rounded-2xl border border-yellow-500/20 bg-black/40 p-8 text-center text-yellow-50 shadow-[0_0_25px_rgba(255,215,0,0.25)] backdrop-blur-xl">
      <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-sm">
        Quiz Results
      </h2>

      {/* Circular Percentage */}
      <div className="relative flex items-center justify-center">
        <svg className="h-40 w-40 -rotate-90">
          {/* background circle */}
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#4a4a4a"
            strokeWidth="12"
            fill="none"
          />
          {/* progress circle */}
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#FACC15"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 70}`}
            strokeDashoffset={`${2 * Math.PI * 70 * (1 - accuracy / 100)}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-3xl font-bold text-yellow-300 drop-shadow">
          {accuracy}%
        </span>
      </div>

      {/* ⭐ Stars */}
      <div className="flex justify-center gap-2">
        {[...Array(maxStars)].map((_, i) => (
          <span
            key={i}
            className={`text-4xl drop-shadow ${
              i < stars ? "text-yellow-400" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-sm text-yellow-200/70">
        Time taken: <span className="font-semibold">{totalTime}s</span>
      </p>

      <p className="text-lg font-medium text-yellow-300 drop-shadow-sm">
        {feedback}
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setShowModal(true)}
          className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-yellow-400"
        >
          Review Answers
        </button>

        <button
          onClick={() => setAppState("welcome")}
          className="rounded-xl border border-yellow-500/40 bg-black/40 px-6 py-3 font-semibold text-yellow-300 shadow-lg transition hover:bg-black/60"
        >
          Try Again
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-md rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 text-yellow-100 shadow-[0_0_25px_rgba(255,215,0,0.2)]">
            <h3 className="mb-4 text-2xl font-bold text-yellow-400 drop-shadow">
              Answer Review
            </h3>

            <ul className="max-h-80 space-y-3 overflow-y-auto pr-1">
              {answers.map((item, i) => (
                <li
                  key={i}
                  className={`rounded-lg border p-3 ${
                    item.isCorrect
                      ? "border-green-500/30 bg-green-500/10"
                      : "border-red-500/30 bg-red-500/10"
                  }`}
                >
                  <p className="font-medium">{item.question}</p>

                  <p className="text-sm text-yellow-200/80">
                    Your answer: <span>{item.userAnswer}</span>
                  </p>

                  {!item.isCorrect && (
                    <p className="text-sm text-yellow-200/80">
                      Correct answer:{" "}
                      <span className="font-semibold text-yellow-300">
                        {item.correctAnswer}
                      </span>
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShowModal(false)}
              className="mt-5 w-full rounded-lg bg-yellow-500 py-2 font-semibold text-black hover:bg-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
