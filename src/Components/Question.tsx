import { shuffleArray } from "../utils/helpers";

export default function Question({ question, onAnswered, setQuestions }) {
  const shuffled = shuffleArray([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  function handleAnswerClick(answer: string) {
    if (answer === question.correct_answer)
      setQuestions((prev) => ({
        ...prev,
        correctAnswers: [
          ...prev.correctAnswers,
          { q: question.question, a: answer },
        ],
      }));
    else
      setQuestions((prev) => ({
        ...prev,
        wrongAnswers: [
          ...prev.wrongAnswers,
          {
            q: question.question,
            a: answer,
            c: question.correct_answer,
          },
        ],
      }));

    onAnswered?.();
  }

  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-zinc-800 p-10">
      <div className="w-full max-w-3xl space-y-12">
        {/* Question Card */}
        <div className="rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10 text-center text-3xl font-bold text-yellow-200 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
          {question.question}
        </div>

        {/* Answer Buttons */}
        <div className="grid grid-cols-2 gap-6">
          {shuffled.map((answer) => (
            <button
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-zinc-800 to-black px-6 py-4 text-lg font-semibold tracking-wide text-yellow-300 shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:text-black hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-95"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
