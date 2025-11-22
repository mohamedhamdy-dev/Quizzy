import Image from "next/image";

export default function QuizWelcome() {
  return (
    // <section className="flex flex-1 flex-col items-center justify-center gap-10 p-8 text-center text-white">
    <section className="relative flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-white/20 bg-white/6 p-8 text-center text-white shadow-xl">
      {/* 🌈 App Logo or Hero Image */}
      {/* <Image
        src="./asdf/asdfas"
        alt="Quizzy illustration"
        className="w-52 drop-shadow-xl"
        width={96}
        height={96}
      /> */}

      {/* 🧠 App Name and Tagline */}
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Welcome to <span className="text-violet-400">Quizzy</span> 🎯
        </h1>

        <p className="max-w-lg text-lg text-white/80">
          Sharpen your mind, explore your curiosity, and challenge yourself with
          fun, brain-tickling quizzes across multiple categories.
        </p>
      </div>

      {/* ✨ Motivational Line */}
      <p className="text-sm text-violet-300/90 italic">
        Knowledge isn’t power until it’s tested. 💡
      </p>

      {/* 🌌 Decorative assets (optional) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-violet-700 opacity-30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
}
