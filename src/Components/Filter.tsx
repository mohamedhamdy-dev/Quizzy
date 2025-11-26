"use client";

import { useState } from "react";

export default function Filters({ onSubmit }) {
  const [amount, setAmount] = useState("10");
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount, category, difficulty, type });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex basis-1/4 flex-col gap-6 rounded-2xl border border-yellow-500/30 bg-black/60 p-6 text-yellow-200 shadow-[0_0_25px_rgba(255,215,0,0.15)] backdrop-blur-xl"
    >
      {/* Amount */}
      <div>
        <label
          className="mb-2 block font-semibold text-yellow-300"
          htmlFor="amount"
        >
          Amount:
        </label>
        <input
          className="block w-full rounded-full border border-yellow-600/30 bg-zinc-900 p-3 px-5 text-yellow-200 shadow-inner transition outline-none focus:border-yellow-400 focus:shadow-[0_0_12px_rgba(255,215,0,0.4)]"
          type="number"
          id="amount"
          min="1"
          max="20"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="mb-2 block font-semibold text-yellow-300"
        >
          Select Category:
        </label>
        <select
          id="category"
          className="block w-full cursor-pointer rounded-xl border border-yellow-600/30 bg-zinc-900 p-3 text-yellow-200 transition outline-none focus:border-yellow-400 focus:shadow-[0_0_12px_rgba(255,215,0,0.4)]"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="any">All</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
        </select>
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="mb-2 font-semibold text-yellow-300">
          Select Difficulty:
        </h3>
        <ul className="overflow-hidden rounded-xl border border-yellow-600/30 bg-zinc-900">
          {["easy", "medium", "hard"].map((level) => (
            <li
              key={level}
              className="w-full border-b border-yellow-700/20 last:border-0"
            >
              <label className="flex cursor-pointer items-center gap-2 px-3 py-3 text-sm font-medium text-yellow-200">
                <input
                  type="radio"
                  name="difficulty"
                  value={level}
                  checked={difficulty === level}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="h-4 w-4 cursor-pointer accent-yellow-400"
                />
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Type */}
      <div>
        <h3 className="mb-2 font-semibold text-yellow-300">Select Type:</h3>
        <ul className="flex w-full rounded-xl border border-yellow-600/30 bg-zinc-900">
          <li className="w-full">
            <label className="flex cursor-pointer items-center gap-2 px-3 py-3 text-sm font-medium text-yellow-200">
              <input
                type="radio"
                name="type"
                value="multiple"
                checked={type === "multiple"}
                onChange={(e) => setType(e.target.value)}
                className="h-4 w-4 cursor-pointer accent-yellow-400"
              />
              Multiple Choice
            </label>
          </li>

          <li className="w-full border-l border-yellow-700/20">
            <label className="flex cursor-pointer items-center gap-2 px-3 py-3 text-sm font-medium text-yellow-200">
              <input
                type="radio"
                name="type"
                value="boolean"
                checked={type === "boolean"}
                onChange={(e) => setType(e.target.value)}
                className="h-4 w-4 cursor-pointer accent-yellow-400"
              />
              True / False
            </label>
          </li>
        </ul>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 py-3 font-bold tracking-wide text-black transition hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] active:scale-95"
      >
        Start Quiz
      </button>
    </form>
  );
}
