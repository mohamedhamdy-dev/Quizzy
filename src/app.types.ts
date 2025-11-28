export type TriviaQuestion = {
  type: "multiple";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionsStateType = {
  questions: TriviaQuestion[];
  correctAnswers: { q: string; a: string }[];
  wrongAnswers: { q: string; a: string; c: string }[];
  timeTaken: number;
};
