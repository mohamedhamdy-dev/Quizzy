import Image from "next/image";

export default function QuizWelcome() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/70 p-10 text-center text-yellow-100 shadow-[0_0_40px_rgba(255,215,0,0.15)] backdrop-blur-xl">
      {/* 🧠 App Name and Tagline */}
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
          Welcome to <span className="text-yellow-400">Quizzy</span> 👑
        </h1>

        <p className="mx-auto max-w-lg text-lg text-yellow-200/80">
          Sharpen your mind, explore your curiosity, and challenge yourself with
          premium-level quizzes built for thinkers.
        </p>
      </div>

      {/* ✨ Motivational Line */}
      <p className="text-sm text-yellow-400/90 italic drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
        True knowledge shines brighter than gold. ✨
      </p>

      {/* 🌌 Golden Decorative Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gold orb top-left */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-600 opacity-20 blur-[90px]"></div>

        {/* Gold orb bottom-right */}
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-500 opacity-25 blur-[100px]"></div>

        {/* Subtle center glow */}
        <div className="absolute inset-0 m-auto h-96 w-96 rounded-full bg-yellow-300 opacity-10 blur-[120px]"></div>
      </div>
    </section>
  );
}
