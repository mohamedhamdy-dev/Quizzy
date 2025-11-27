"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Question from "./Question";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper/types";

export default function QuizTaking({ questions, setQuestions, setAppState }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)} // capture swiper instance
      pagination={{ type: "progressbar" }}
      allowTouchMove={false} // 🚫 disable manual swiping
      navigation={false} // optional: hide arrows
      modules={[Pagination, Navigation]}
      className="mySwiper basis-3/4 rounded-2xl border border-white/20 bg-gradient-to-br from-black via-neutral-900 to-zinc-800 p-5 shadow-xl"
    >
      {questions.questions.map((question, index) => {
        return (
          // <SwiperSlide className="p-5" key={question.question}>
          <SwiperSlide key={question.question} className="">
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
