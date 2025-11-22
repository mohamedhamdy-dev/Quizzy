"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Question from "./Question";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper/types";
import { TriviaQuestion } from "@/app.types";

export default function QuizTaking({ questions, setQuestions, setAppState }) {
  const swiperRef = useRef<SwiperType | null>(null);

  /////////////////// for testing
  console.log(questions);
  console.log(questions.length);
  console.log(swiperRef);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)} // capture swiper instance
      pagination={{ type: "progressbar" }}
      allowTouchMove={false} // 🚫 disable manual swiping
      navigation={false} // optional: hide arrows
      modules={[Pagination, Navigation]}
      // className="mySwiper basis-3/4 rounded-2xl bg-gradient-to-tl from-violet-600 to-purple-800 p-5"
      className="mySwiper basis-3/4 rounded-2xl border border-white/20 bg-white/6 p-5 shadow-xl"
    >
      {questions.questions.map((question, index) => {
        return (
          <SwiperSlide className="p-5" key={question.question}>
            <Question
              question={question}
              setQuestions={setQuestions}
              onAnswered={() => {
                // ⬅️ when user answers, go to next slide
                if (
                  swiperRef.current &&
                  index < questions?.questions?.length - 1
                ) {
                  swiperRef.current.slideNext();
                } else {
                  // Optionally show result screen or summary here
                  setAppState("finished");
                }
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
