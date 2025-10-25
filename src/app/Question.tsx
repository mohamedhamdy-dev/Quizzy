import { shuffleArray } from "./utils/helpers";

export default function Question({ question, onAnswered, setQuizResult }) {
  const shuffled = shuffleArray([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  const handleAnswerClick = (answer) => {
    if (answer === question.correct_answer)
      setQuizResult((prev) => ({
        ...prev,
        correctAnswers: [
          ...prev.correctAnswers,
          { question: question.question, chosenAnswer: answer },
        ],
      }));
    else {
      setQuizResult((prev) => ({
        ...prev,
        wrongAnswers: [
          ...prev.wrongAnswers,
          {
            question: question.question,
            chosenAnswer: answer,
            correctAnswer: question.correct_answer,
          },
        ],
      }));
    }
    // Move to next question
    onAnswered?.();
  };

  return (
    <>
      <p className="mb-6 rounded-xl bg-white p-5 py-20 text-center text-2xl shadow-2xl">
        {question.question}
      </p>
      <div className="gird-rows-2 grid grid-cols-2 gap-6">
        {shuffled.map((answer) => (
          <button
            className="rounded-xl bg-white px-4 py-3 text-center"
            key={answer}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </>
  );
}
