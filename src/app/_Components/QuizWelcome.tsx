export default function QuizWelcome() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 p-8 text-center text-white">
      {/* 🌈 App Logo or Hero Image */}
      <img
        // src={quizHero}
        alt="Quizzy illustration"
        className="w-52 drop-shadow-xl"
      />

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
        "Knowledge isn’t power until it’s tested." 💡
      </p>

      {/* 🌌 Decorative assets (optional) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-violet-700 opacity-30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
}
