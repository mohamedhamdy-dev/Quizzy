import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CustomSelect({ value, onChange, options, label }) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div ref={selectRef} className="relative">
      <p className="mb-2 block font-semibold text-yellow-300">{label}</p>

      {/* Selected Box */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center justify-between rounded-xl border border-yellow-600/30 bg-zinc-900 px-4 py-3 text-yellow-200 shadow-inner transition select-none hover:border-yellow-400"
      >
        <span>{selectedLabel}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-yellow-400"
        >
          ▼
        </motion.span>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 left-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-xl border border-yellow-600/30 bg-zinc-900 shadow-xl"
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  className={`w-full px-4 py-3 text-left text-sm transition ${
                    value === opt.value
                      ? "bg-yellow-600/20 text-yellow-300"
                      : "hover:bg-yellow-500/20"
                  }`}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomSelect;
