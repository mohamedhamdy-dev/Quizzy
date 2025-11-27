"use client";

import { useState } from "react";
import CustomSelect from "./CustomSelect";
import { CustomNumberInput } from "./CustomNumberInput";

export default function Filters({ onSubmit }) {
  const [amount, setAmount] = useState("10");
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount, category, difficulty });
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

      {/* Submit */}
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-3 text-lg font-bold tracking-wide text-black shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] active:scale-95"
      >
        Submit
      </button>
    </form>
  );
}
