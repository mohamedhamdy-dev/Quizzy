"use client";

import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Question from "../Question";

export default function QuizTaking({ swiperRef, setQuizResult }) {
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)} // capture swiper instance
      pagination={{ type: "progressbar" }}
      allowTouchMove={false} // 🚫 disable manual swiping
      navigation={false} // optional: hide arrows
      modules={[Pagination, Navigation]}
      className="mySwiper basis-3/4 rounded-2xl bg-gradient-to-tl from-violet-600 to-purple-800 p-5"
    >
      {tempData.results.map((question, index) => {
        return (
          <SwiperSlide className="p-5" key={question.question}>
            <Question
              question={question}
              setQuizResult={setQuizResult}
              onAnswered={() => {
                // ⬅️ when user answers, go to next slide
                if (swiperRef.current && index < tempData.results.length - 1) {
                  swiperRef.current.slideNext();
                } else {
                  console.log("Quiz finished!");
                  // Optionally show result screen or summary here
                }
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const tempData = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "What is the official language of Bhutan?",
      correct_answer: "Dzongkha",
      incorrect_answers: ["Ladakhi", "Karen", "Groma"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question:
        "Bridgetown is the capital of which island country in the Carribean?",
      correct_answer: "Barbados",
      incorrect_answers: ["Cuba", "Jamaica&lrm;", "Dominica"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "Which is the largest of these 4 islands?",
      correct_answer: "Borneo",
      incorrect_answers: ["Great Britain", "Cuba", "Madagascar"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question:
        "The following Spanish provinces are located in the northern area of Spain except:",
      correct_answer: "Murcia",
      incorrect_answers: ["Asturias", "Navarre", "Le&oacute;n"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "Which German city is located on the River Isar?",
      correct_answer: "Munich",
      incorrect_answers: ["Berlin", "Hamburg", "Dortmund"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "What is the capital of Chile?",
      correct_answer: "Santiago",
      incorrect_answers: ["Valpara&iacute;so", "Copiap&oacute;", "Antofagasta"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question:
        "Which of these countries is not written in its native language?",
      correct_answer: "Slova&scaron;ko",
      incorrect_answers: ["Suomi", "Schweiz", "Ell&aacute;da"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "On a London Underground map, what colour is the Circle Line?",
      correct_answer: "Yellow",
      incorrect_answers: ["Red", "Blue", "Green"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "What is the capital city of New Zealand?",
      correct_answer: "Wellington",
      incorrect_answers: ["Auckland", "Christchurch", "Melbourne"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "Where is the &quot;Sonoran Desert&quot; located?",
      correct_answer: "North America",
      incorrect_answers: ["South America", "Asia", "Africa"],
    },
  ],
};
