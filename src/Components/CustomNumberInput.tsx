import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type CustomNumberInputProps = {
  value: string;
  onChange: (s: string) => void;
  min: number;
  max: number;
};

export function CustomNumberInput({
  value,
  onChange,
  min = 1,
  max = 20,
}: CustomNumberInputProps) {
  const num = Number(value);
  const isMin = num <= min;
  const isMax = num >= max;

  const [warning, setWarning] = useState("");

  const handleChange = (newVal) => {
    const n = Number(newVal);

    if (n < min) {
      setWarning(`Minimum allowed is ${min}`);
      return;
    }
    if (n > max) {
      setWarning(`Maximum allowed is ${max}`);
      return;
    }

    setWarning("");
    onChange(String(n));
  };

  return (
    <div className="w-full">
      <label className="mb-2 block font-semibold text-yellow-300">
        Amount:
      </label>

      {/* <div className="flex w-full items-center overflow-hidden rounded-full border border-yellow-600/30 bg-zinc-900 shadow-inner "> */}
      <div className="flex w-full items-center overflow-hidden rounded-full border border-yellow-600/30 bg-zinc-900 px-2 shadow-inner">
        {/* - Button */}
        <button
          type="button"
          disabled={isMin}
          onClick={() => handleChange(num - 1)}
          className={`cursor-pointer rounded-full p-2 text-lg duration-300 select-none active:scale-[85%] ${
            isMin
              ? "cursor-not-allowed text-gray-600"
              : "text-yellow-300 hover:bg-yellow-500/10"
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
          </svg>
        </button>

        {/* Text Input */}
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => {
            if (/^\d*$/.test(e.target.value)) handleChange(e.target.value);
          }}
          className="w-full bg-transparent p-3 text-center text-yellow-200 outline-none"
        />

        {/* + Button */}
        <button
          type="button"
          disabled={isMax}
          onClick={() => handleChange(num + 1)}
          className={`cursor-pointer rounded-full p-2 duration-300 select-none active:scale-[85%] ${
            isMax
              ? "cursor-not-allowed text-gray-600"
              : "text-yellow-300 hover:bg-yellow-500/10"
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
          </svg>
        </button>
      </div>

      {/* Constraints Message */}
      <div className="flex justify-between">
        <p className="mt-1 text-xs text-yellow-300/60">
          Allowed range: {min}–{max}
        </p>

        {/* Warning Feedback */}
        <AnimatePresence>
          {warning && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="mt-1 text-xs text-red-400"
            >
              {warning}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
