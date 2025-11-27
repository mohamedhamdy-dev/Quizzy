export default function QuizReady({ setAppState }) {
  function handleStart() {
    setAppState("inprogress");
  }

  return (
    <section className="relative flex min-h-120 flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/70 p-10 text-center text-yellow-100 shadow-[0_0_40px_rgba(255,215,0,0.15)] backdrop-blur-xl lg:min-h-140">
      {/* 🏁 Title & Description */}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold tracking-wide text-nowrap text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] sm:text-5xl">
          Your Quiz is Ready! ✨
        </h2>
        <p className="mx-auto max-w-xs text-yellow-200/80 sm:max-w-lg sm:text-lg">
          Everything is prepared. When you’re ready, click below to begin — once
          you start, the quiz timer will activate immediately.
        </p>
      </div>

      {/* 🚀 Start Button */}
      <button
        onClick={handleStart}
        className="cursor-pointer rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2 text-lg font-bold tracking-wide text-black shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] active:scale-95"
      >
        Start Quiz 🚀
      </button>

      {/* 🌌 Gold Decorative Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 size-72 rounded-full bg-yellow-600 opacity-25 blur-[90px]"></div>
        <div className="absolute right-0 bottom-0 size-72 rounded-full bg-yellow-500 opacity-25 blur-[100px]"></div>
        <div className="absolute inset-0 m-auto size-96 rounded-full bg-yellow-300 opacity-10 blur-[120px]"></div>
      </div>
    </section>
  );
}
