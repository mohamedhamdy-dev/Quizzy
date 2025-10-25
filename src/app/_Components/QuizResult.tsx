import { useState } from "react";

export default function QuizResult({
  correctCount,
  totalCount,
  totalTime,
  onRestart,
  answers,
}) {
  const [showModal, setShowModal] = useState(false);

  // 🧮 Calculate accuracy
  const accuracy = Math.round((correctCount / totalCount) * 100);

  // 🌟 Star logic based on time (example thresholds)
  const maxStars = 3;
  const fastThreshold = 60; // seconds for 3 stars
  const mediumThreshold = 120; // seconds for 2 stars
  let stars = 1;
  if (totalTime <= fastThreshold) stars = 3;
  else if (totalTime <= mediumThreshold) stars = 2;

  // 🧠 Feedback message
  let feedback = "Keep practicing!";
  if (accuracy === 100) feedback = "Perfect score! 🎯";
  else if (accuracy >= 80) feedback = "Excellent work! 💪";
  else if (accuracy >= 50) feedback = "Good effort! 👍";

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-6 bg-green-500 p-8 text-center text-white">
      <h2 className="text-4xl font-bold text-violet-300">Quiz Results</h2>

      {/* 🎯 Circular Percentage */}
      <div className="relative flex items-center justify-center">
        <svg className="h-40 w-40 -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#4C1D95"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#8B5CF6"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 70}`}
            strokeDashoffset={`${2 * Math.PI * 70 * (1 - accuracy / 100)}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-3xl font-bold text-white">
          {accuracy}%
        </span>
      </div>

      {/* 🌟 Time performance */}
      <div className="flex justify-center gap-2">
        {[...Array(maxStars)].map((_, i) => (
          <span
            key={i}
            className={`text-3xl ${
              i < stars ? "text-yellow-400" : "text-gray-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* ⏱ Time info */}
      <p className="text-sm text-white/70">Time taken: {totalTime} seconds</p>

      {/* 🧠 Feedback message */}
      <p className="text-lg font-medium text-violet-200">{feedback}</p>

      {/* 🔘 Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setShowModal(true)}
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold shadow-md transition hover:bg-violet-500"
        >
          Review Answers
        </button>
        <button
          onClick={onRestart}
          className="rounded-xl bg-white/20 px-6 py-3 font-semibold shadow-md transition hover:bg-white/30"
        >
          Try Again
        </button>
      </div>

      {/* 💬 Modal Window */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-[90%] max-w-md rounded-2xl bg-white p-6 text-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-violet-700">
              Answer Review
            </h3>
            <ul className="max-h-80 space-y-3 overflow-y-auto">
              {answers.map((item, i) => (
                <li
                  key={i}
                  className={`rounded-lg border p-3 ${
                    item.isCorrect
                      ? "border-green-400 bg-green-50"
                      : "border-red-400 bg-red-50"
                  }`}
                >
                  <p className="font-medium">{item.question}</p>
                  <p className="text-sm text-gray-600">
                    Your answer: <span>{item.userAnswer}</span>
                  </p>
                  {!item.isCorrect && (
                    <p className="text-sm text-gray-600">
                      Correct answer:{" "}
                      <span className="font-semibold">
                        {item.correctAnswer}
                      </span>
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShowModal(false)}
              className="mt-5 w-full rounded-lg bg-violet-600 py-2 font-semibold text-white hover:bg-violet-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🌌 Soft background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-violet-700 opacity-30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
}
