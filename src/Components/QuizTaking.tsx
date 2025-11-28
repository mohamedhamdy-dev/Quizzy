"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Question from "./Question";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper/types";
import Timer from "./Timer";
import { QuestionsStateType } from "@/app.types";

type QuizTakingProps = {
  questions: QuestionsStateType;
  setQuestions: React.Dispatch<React.SetStateAction<QuestionsStateType>>;
  setAppState: React.Dispatch<string>;
};

export default function QuizTaking({
  questions,
  setQuestions,
  setAppState,
}: QuizTakingProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const timerRef = useRef<number>(0);

  return (
    <div className="relative">
      {/* ⏱ Timer at top-right */}
      <Timer timerRef={timerRef} />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ type: "progressbar" }}
        allowTouchMove={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper min-h-120 basis-3/4 rounded-2xl border border-white/20 bg-gradient-to-br from-black via-neutral-900 to-zinc-800 p-5 shadow-xl lg:min-h-140"
      >
        {questions.questions.map((question, index) => {
          return (
            <SwiperSlide key={question.question}>
              <Question
                question={question}
                setQuestions={setQuestions}
                onAnswered={() => {
                  if (
                    swiperRef.current &&
                    index < questions.questions.length - 1
                  ) {
                    swiperRef.current.slideNext();
                  } else {
                    // ⬅️ QUIZ FINISHED → submit timer result
                    setQuestions((state) => ({
                      ...state,
                      timeTaken: timerRef.current,
                    }));
                    setAppState("finished");
                  }
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
