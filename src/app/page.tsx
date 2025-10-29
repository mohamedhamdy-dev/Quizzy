import Filters from "./Filter";
import QuestionContainer from "./QuestionContainer";

export default function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="z-10 container mx-auto flex gap-5">
        <Filters />
        {/* <Question /> */}
        <QuestionContainer />
      </div>
    </div>
  );
}


