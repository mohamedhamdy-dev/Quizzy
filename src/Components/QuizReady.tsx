export default function QuizReady({ setAppState }) {
  function handleStart() {
    setAppState("inprogress");
  }

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/70 p-10 text-center text-yellow-100 shadow-[0_0_40px_rgba(255,215,0,0.15)] backdrop-blur-xl">
      {/* 🧠 Illustration */}
      <img
        alt="Quiz Ready"
        className="w-56 max-w-full drop-shadow-[0_0_20px_rgba(255,215,0,0.25)]"
      />

      {/* 🏁 Title & Description */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
          Your Quiz is Ready! ✨
        </h2>
        <p className="mx-auto max-w-lg text-base text-yellow-200/80">
          Everything is prepared. When you’re ready, click below to begin — once
          you start, the quiz timer will activate immediately.
        </p>
      </div>

      {/* 🚀 Start Button */}
      <button
        onClick={handleStart}
        className="rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-10 py-4 text-lg font-bold tracking-wide text-black shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] active:scale-95"
      >
        Start Quiz 🚀
      </button>

      {/* 🌌 Gold Decorative Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Golden blur top-left */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-600 opacity-25 blur-[90px]"></div>

        {/* Golden blur bottom-right */}
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-500 opacity-25 blur-[100px]"></div>

        {/* Soft center glow */}
        <div className="absolute inset-0 m-auto h-96 w-96 rounded-full bg-yellow-300 opacity-10 blur-[120px]"></div>
      </div>
    </section>
  );
}
