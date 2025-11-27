"use client";

import { useState } from "react";
import CustomSelect from "./CustomSelect";
import { CustomNumberInput } from "./CustomNumberInput";

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
      <CustomNumberInput value={amount} onChange={setAmount} min={1} max={20} />

      {/* Category */}
      <CustomSelect
        label="Select Category:"
        value={category}
        onChange={setCategory}
        options={[
          { value: "any", label: "All" },
          { value: "9", label: "General Knowledge" },
          { value: "10", label: "Entertainment: Books" },
          { value: "11", label: "Entertainment: Film" },
          { value: "12", label: "Entertainment: Music" },
          { value: "13", label: "Entertainment: Musicals & Theatres" },
          { value: "14", label: "Entertainment: Television" },
          { value: "15", label: "Entertainment: Video Games" },
          { value: "17", label: "Science & Nature" },
          { value: "18", label: "Science: Computers" },
          { value: "19", label: "Science: Mathematics" },
          { value: "21", label: "Sports" },
          { value: "23", label: "History" },
        ]}
      />

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
