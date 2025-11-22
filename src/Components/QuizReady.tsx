// export default function QuizReady({ setQuizState }) {
//   function handleStart() {
//     setQuizState("inprogress");
//   }

//   return (
//     <section className="relative flex flex-1 flex-col items-center justify-center gap-8 p-8 text-center text-white">
//       {/* 🧠 Illustration */}
//       <img
//         // src={quizReadyIllustration}
//         alt="Quiz Ready"
//         className="w-56 max-w-full drop-shadow-xl"
//       />

//       {/* 🏁 Title & Description */}
//       <div className="space-y-4">
//         <h2 className="text-4xl font-bold text-violet-300">
//           Your Quiz is Ready! 🎉
//         </h2>
//         <p className="mx-auto max-w-lg text-base text-white/80">
//           The questions are loaded and waiting for you. Click below to begin —
//           once you start, the timer begins automatically.
//         </p>
//       </div>

//       {/* 🚀 Start Button */}
//       <button
//         onClick={handleStart}
//         className="rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold shadow-md transition hover:bg-violet-500 focus:ring-4 focus:ring-violet-400 focus:outline-none"
//       >
//         Take Quiz 🚀
//       </button>

//       {/* 🌌 Decorative blurred backgrounds */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-violet-700 opacity-30 blur-3xl"></div>
//         <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
//       </div>
//     </section>
//   );
// }

export default function QuizReady({ setAppState }) {
  function handleStart() {
    setAppState("inprogress");
  }

  return (
    // <section className="relative flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl p-8 text-center text-white">
    <section className="relative flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-white/20 bg-white/6 p-8 text-center text-white shadow-xl">
      {/* 🧠 Illustration */}
      <img
        // src={quizReadyIllustration}
        alt="Quiz Ready"
        className="w-56 max-w-full drop-shadow-xl"
      />

      {/* 🏁 Title & Description */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-violet-300">
          Your Quiz is Ready! 🎉
        </h2>
        <p className="mx-auto max-w-lg text-base text-white/80">
          The questions are loaded and waiting for you. Click below to begin —
          once you start, the timer begins automatically.
        </p>
      </div>

      {/* 🚀 Start Button */}
      <button
        onClick={handleStart}
        className="rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold shadow-md transition hover:bg-violet-500 focus:ring-4 focus:ring-violet-400 focus:outline-none"
      >
        Take Quiz 🚀
      </button>

      {/* 🌌 Decorative blurred backgrounds */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-violet-700 opacity-30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
}
