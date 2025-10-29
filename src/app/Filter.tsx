// export default function Filters() {
//   return (
//     <form className="flex basis-1/4 flex-col gap-5 rounded-2xl bg-gradient-to-tl from-violet-600 to-purple-800 p-5">
//       <div>
//         <label className="mb-4 block font-medium text-white" htmlFor="amount">
//           Amount:
//         </label>
//         <input
//           className="block w-full rounded-full bg-white p-3 px-5 outline-none"
//           placeholder="Enter Amount "
//           type="text"
//           id="amount"
//         />
//       </div>
//       <div>
//         <label htmlFor="default" className="mb-4 block font-medium text-white">
//           Select Category:
//         </label>
//         <select
//           id="default"
//           className="block w-full cursor-pointer rounded-xl bg-white p-2.5 text-gray-900 outline-none"
//         >
//           <option value="any">All</option>
//           <option value="9">General Knowledge</option>
//           <option value="10">Entertainment: Books</option>
//           <option value="11">Entertainment: Film</option>
//           <option value="12">Entertainment: Music</option>
//           <option value="13">Entertainment: Musicals &amp; Theatres</option>
//           <option value="14">Entertainment: Television</option>
//           <option value="15">Entertainment: Video Games</option>
//           <option value="16">Entertainment: Board Games</option>
//           <option value="17">Science &amp; Nature</option>
//           <option value="18">Science: Computers</option>
//           <option value="19">Science: Mathematics</option>
//           <option value="20">Mythology</option>
//           <option value="21">Sports</option>
//           <option value="22">Geography</option>
//           <option value="23">History</option>
//           <option value="24">Politics</option>
//           <option value="25">Art</option>
//           <option value="26">Celebrities</option>
//           <option value="27">Animals</option>
//           <option value="28">Vehicles</option>
//           <option value="29">Entertainment: Comics</option>
//           <option value="30">Science: Gadgets</option>
//           <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
//           <option value="32">Entertainment: Cartoon &amp; Animations</option>
//         </select>
//       </div>
//       <div>
//         <h3 className="mb-4 font-medium text-white">Select Difficulty:</h3>
//         <ul className="overflow-hidden rounded-xl bg-white text-gray-900">
//           <li className="w-full cursor-pointer border-b border-gray-500">
//             <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
//               <input
//                 type="radio"
//                 value="easy"
//                 name="difficulty"
//                 className="h-4 w-4 cursor-pointer"
//               />
//               Easy
//             </label>
//           </li>
//           <li className="w-full cursor-pointer border-b border-gray-500">
//             <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
//               <input
//                 type="radio"
//                 value="medium"
//                 name="difficulty"
//                 className="h-4 w-4 cursor-pointer"
//               />
//               Medium
//             </label>
//           </li>
//           <li className="w-full cursor-pointer">
//             <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
//               <input
//                 type="radio"
//                 value="hard"
//                 name="difficulty"
//                 className="h-4 w-4 cursor-pointer"
//               />
//               Hard
//             </label>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="mb-4 font-medium text-gray-900 dark:text-white">
//           Select Type:
//         </h3>
//         <ul className="flex w-full items-center rounded-xl bg-white font-medium text-gray-900">
//           <li className="w-full cursor-pointer">
//             <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
//               <input
//                 type="radio"
//                 value="multiple"
//                 name="type"
//                 className="h-4 w-4 cursor-pointer"
//               />
//               Multiple Choice
//             </label>
//           </li>
//           <li className="w-full cursor-pointer border-l border-gray-500">
//             <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
//               <input
//                 type="radio"
//                 value="boolean"
//                 name="type"
//                 className="h-4 w-4 cursor-pointer"
//               />
//               True / False
//             </label>
//           </li>
//         </ul>
//       </div>
//     </form>
//   );
// }
export default function Filters() {
  return (
    // <form className="flex basis-1/4 flex-col gap-5 rounded-2xl bg-gradient-to-tl from-violet-600 to-purple-800 p-5">
    <form className="flex basis-1/4 flex-col gap-5 rounded-2xl border border-white/20 bg-white/6 p-5 shadow-xl">
      <div>
        <label className="mb-4 block font-medium text-white" htmlFor="amount">
          Amount:
        </label>
        <input
          className="block w-full rounded-full bg-white p-3 px-5 outline-none"
          placeholder="Enter Amount "
          type="text"
          id="amount"
        />
      </div>
      <div>
        <label htmlFor="default" className="mb-4 block font-medium text-white">
          Select Category:
        </label>
        <select
          id="default"
          className="block w-full cursor-pointer rounded-xl bg-white p-2.5 text-gray-900 outline-none"
        >
          <option value="any">All</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
      </div>
      <div>
        <h3 className="mb-4 font-medium text-white">Select Difficulty:</h3>
        <ul className="overflow-hidden rounded-xl bg-white text-gray-900">
          <li className="w-full cursor-pointer border-b border-gray-500">
            <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
              <input
                type="radio"
                value="easy"
                name="difficulty"
                className="h-4 w-4 cursor-pointer"
              />
              Easy
            </label>
          </li>
          <li className="w-full cursor-pointer border-b border-gray-500">
            <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
              <input
                type="radio"
                value="medium"
                name="difficulty"
                className="h-4 w-4 cursor-pointer"
              />
              Medium
            </label>
          </li>
          <li className="w-full cursor-pointer">
            <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
              <input
                type="radio"
                value="hard"
                name="difficulty"
                className="h-4 w-4 cursor-pointer"
              />
              Hard
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 font-medium text-gray-900 dark:text-white">
          Select Type:
        </h3>
        <ul className="flex w-full items-center rounded-xl bg-white font-medium text-gray-900">
          <li className="w-full cursor-pointer">
            <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
              <input
                type="radio"
                value="multiple"
                name="type"
                className="h-4 w-4 cursor-pointer"
              />
              Multiple Choice
            </label>
          </li>
          <li className="w-full cursor-pointer border-l border-gray-500">
            <label className="flex w-full cursor-pointer items-center gap-2 py-3 ps-3 text-sm font-medium">
              <input
                type="radio"
                value="boolean"
                name="type"
                className="h-4 w-4 cursor-pointer"
              />
              True / False
            </label>
          </li>
        </ul>
      </div>
    </form>
  );
}
