import { QuestionsStateType, TriviaQuestion } from "@/app.types";
import { shuffleArray } from "../utils/helpers";

type QuestionProps = {
  question: TriviaQuestion;
  onAnswered: () => void;
  setQuestions: React.Dispatch<React.SetStateAction<QuestionsStateType>>;
};

export default function Question({
  question,
  onAnswered,
  setQuestions,
}: QuestionProps) {
  const shuffled = shuffleArray([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  // function handleAnswerClick(answer: string) {
  //   if (answer === question.correct_answer)
  //     setQuestions((prev) => ({
  //       ...prev,
  //       correctAnswers: [
  //         ...prev.correctAnswers,
  //         { q: question.question, a: answer },
  //       ],
  //     }));
  //   else
  //     setQuestions((prev) => ({
  //       ...prev,
  //       wrongAnswers: [
  //         ...prev.wrongAnswers,
  //         {
  //           q: question.question,
  //           a: answer,
  //           c: question.correct_answer,
  //         },
  //       ],
  //     }));

  //   onAnswered?.();
  // }
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
    <div className="flex h-full items-center justify-center p-3 pt-20 sm:p-10 sm:pt-20">
      <div className="w-full">
        <div className="mb-6 flex min-h-56 w-full items-center justify-center rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-3 text-center text-lg font-bold text-pretty text-yellow-200 shadow-[0_0_30px_rgba(255,215,0,0.15)] sm:mb-12 sm:p-10 sm:text-xl lg:text-2xl">
          {question.question}
        </div>

        {/* Answer Buttons */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
          {shuffled.map((answer) => (
            <button
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              className="cursor-pointer rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-zinc-800 to-black px-6 py-4 font-semibold tracking-wide text-yellow-300 shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:text-black hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-95 sm:text-lg"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
