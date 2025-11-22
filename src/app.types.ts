export interface TriviaQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

type initialQuestionsState = {
  questions: TriviaQuestion[];
  correctAnswers: never[];
  wrongAnswer: never[];
};

type QuizTakingProps = {
  questions: TriviaQuestion[];
  setQuestions: (a: string) => void;
  setAppState: (a: string) => void;
};
