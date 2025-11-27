import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

// Create context for modal state
const ModalContext = createContext();

export default function Modal({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Trigger = function Trigger({ children, className }) {
  const { setOpen } = useContext(ModalContext);
  return (
    <button className={className} onClick={() => setOpen(true)}>
      {children}
    </button>
  );
};

Modal.Content = function Content({ children }) {
  const { open, setOpen } = useContext(ModalContext);
  const modalRef = useRef(null);

  // Close on outside click + Escape key
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleEscape(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Box */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* <div ref={modalRef} className="relative w-96 rounded-2xl"> */}
            <div ref={modalRef} className="relative w-100 rounded-2xl">
              {children}
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 cursor-pointer text-yellow-400 duration-300 hover:rotate-180"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M368 368 144 144m224 0L144 368"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};
