"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative flex min-h-[60vh] flex-col items-center justify-center gap-8 rounded-2xl border border-yellow-500/20 bg-black/60 p-10 text-yellow-300 shadow-[0_0_40px_rgba(255,215,0,0.15)] backdrop-blur-xl">
      {/* 🔥 Outer rotating ring */}
      <motion.div
        className="relative h-24 w-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-yellow-600/20 border-t-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.6)]"></div>

        {/* ✨ Inner pulsing orb */}
        <motion.div
          className="absolute inset-4 rounded-full bg-yellow-500/30 blur-md"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl font-bold tracking-wide text-yellow-200 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Loading Questions...
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="max-w-sm text-center text-yellow-300/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Preparing your premium quiz experience. Please wait ✨
      </motion.p>

      {/* Gold glowing ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-600/20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-500/20 blur-[120px]"></div>
      </div>
    </div>
  );
}
