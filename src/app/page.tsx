import Filters from "./Filter";
import QuestionContainer from "./Question";

export default function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="container mx-auto flex gap-5 bg-red-500">
        <Filters />
        {/* <Question /> */}
        <QuestionContainer />
      </div>
    </div>
  );
}
