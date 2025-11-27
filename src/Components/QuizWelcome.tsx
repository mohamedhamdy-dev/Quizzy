import Filters from "./Filter";
import Modal from "./Modal";

export default function QuizWelcome({ onSubmit }) {
  return (
    <section className="relative mx-auto flex min-h-120 flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/70 p-10 text-center text-yellow-100 shadow-[0_0_40px_rgba(255,215,0,0.15)] backdrop-blur-xl lg:min-h-140">
      {/* 🧠 App Name and Tagline */}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold tracking-wide text-nowrap text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] sm:text-5xl">
          Welcome to <span className="text-yellow-400">Quizzy</span> 👑
        </h2>

        <p className="mx-auto max-w-xs text-yellow-200/80 sm:max-w-lg sm:text-lg">
          Sharpen your mind, explore your curiosity, and challenge yourself with
          premium-level quizzes built for thinkers.
        </p>
      </div>

      {/* ✨ Motivational Line */}
      <p className="text-sm text-yellow-400/90 italic drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
        True knowledge shines brighter than gold. ✨
      </p>
      {/* ⭐ NEW BUTTON — OPENS MODAL */}
      <Modal>
        <Modal.Trigger
          className={
            "cursor-pointer rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 px-8 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,215,0,0.4)] transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
          }
        >
          start
        </Modal.Trigger>
        <Modal.Content className="w-100 rounded-2xl">
          <Filters onSubmit={onSubmit} />
        </Modal.Content>
      </Modal>

      {/* 🌌 Golden Decorative Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 size-72 rounded-full bg-yellow-600 opacity-20 blur-[90px]"></div>
        <div className="absolute right-0 bottom-0 size-80 rounded-full bg-yellow-500 opacity-25 blur-[100px]"></div>
        <div className="absolute inset-0 m-auto size-96 rounded-full bg-yellow-300 opacity-10 blur-[120px]"></div>
      </div>
    </section>
  );
}
