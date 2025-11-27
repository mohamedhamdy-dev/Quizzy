"use client";

import Modal from "./Modal";
import { motion } from "motion/react";

export default function QuizResult({ questions, setQuestions, setAppState }) {
  const { correctAnswers = [], wrongAnswers = [] } = questions;

  // Counts
  const correctCount = correctAnswers.length;
  const wrongCount = wrongAnswers.length;
  const totalCount = correctCount + wrongCount;

  // Accuracy score (0–100)
  const accuracy =
    totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  // Speed score (0–100)
  const timePerQ = totalCount > 0 ? questions.timeTaken / totalCount : 999;

  let speedScore;
  if (timePerQ <= 5) speedScore = 100;
  else if (timePerQ <= 10) speedScore = 70;
  else if (timePerQ <= 15) speedScore = 40;
  else speedScore = 10;

  // Final score (0–100)
  const finalScore = Math.round(accuracy * 0.7 + speedScore * 0.3);

  // Stars (0–5)
  let stars = 0;
  if (finalScore >= 90) stars = 5;
  else if (finalScore >= 75) stars = 4;
  else if (finalScore >= 55) stars = 3;
  else if (finalScore >= 30) stars = 2;
  else if (finalScore >= 1) stars = 1;

  // Feedback message
  let feedback = "Keep practicing!";
  if (finalScore >= 95) feedback = "Perfect job! ⭐";
  else if (finalScore >= 85) feedback = "Outstanding performance!";
  else if (finalScore >= 70) feedback = "Great work!";
  else if (finalScore >= 50) feedback = "Good effort!";

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
      correctAnswer: item.c ?? "Unknown",
      isCorrect: false,
    })),
  ];

  return (
    <section className="relative flex min-h-120 flex-1 flex-col items-center justify-center gap-6 rounded-2xl border border-yellow-500/20 bg-black/40 p-8 text-center text-yellow-50 shadow-[0_0_25px_rgba(255,215,0,0.25)] backdrop-blur-xl lg:min-h-140">
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

          {/* animated progress circle */}
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            stroke="#FACC15"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 70}
            initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
            animate={{
              strokeDashoffset: 2 * Math.PI * 70 * (1 - accuracy / 100),
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </svg>

        <span className="absolute text-3xl font-bold text-yellow-300 drop-shadow">
          {accuracy}%
        </span>
      </div>

      {/* ⭐ Stars */}
      <div className="flex justify-center gap-2">
        {[...Array(5)].map((_, i) => {
          const isActive = i < stars;

          return (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + i * 0.15, // starts AFTER circle animation finishes
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className={`text-4xl drop-shadow ${
                isActive ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
            </motion.span>
          );
        })}
      </div>

      <p className="text-sm text-yellow-200/70">
        Time taken:{" "}
        <span className="font-semibold">{questions.timeTaken}s</span>
      </p>

      <p className="text-lg font-medium text-yellow-300 drop-shadow-sm">
        {feedback}
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <Modal>
          <Modal.Trigger className="cursor-pointer rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2 text-lg font-bold tracking-wide text-black shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] active:scale-95">
            Review Answers
          </Modal.Trigger>
          {/* <Modal.Content className=""> */}
          <Modal.Content className="max-w-[95%]">
            <div className="relative rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 text-yellow-100 shadow-[0_0_25px_rgba(255,215,0,0.2)]">
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
            </div>
          </Modal.Content>
        </Modal>
        <button
          onClick={() => {
            setQuestions({
              questions: [],
              correctAnswers: [],
              wrongAnswers: [],
              timeTaken: 0,
            });
            setAppState("welcome");
          }}
          className="cursor-pointer rounded-xl border border-yellow-500/40 bg-black/40 px-6 py-3 font-semibold text-yellow-300 shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 hover:bg-black/60 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] active:scale-95"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
