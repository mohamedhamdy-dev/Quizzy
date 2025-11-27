export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; // copy so we don't mutate original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index 0..i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
}

export function decodeHTMLEntities(input) {
  if (input == null) return input;

  // Browser DOM approach (preferred)
  if (typeof document !== "undefined") {
    const el = document.createElement("textarea");
    // Setting innerHTML decodes entities; textarea.value gives the decoded text
    el.innerHTML = input;
    return el.value;
  }

  // Fallback (Node / no DOM): handle numeric and common named entities.
  // Named entity map: add any additional named entities you expect.
  const namedEntities = {
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    nbsp: "\u00A0",
    apos: "'",
    middot: "·",
    copy: "©",
    reg: "®",
    euro: "€",
    // add more if you need them
  };

  return input.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, token) => {
    // numeric (hex) e.g. #x27
    if (token[0] === "#") {
      // remove leading '#'
      const isHex = token[1] === "x" || token[1] === "X";
      const numStr = isHex ? token.slice(2) : token.slice(1);
      const codePoint = parseInt(numStr, isHex ? 16 : 10);
      if (!Number.isNaN(codePoint)) return String.fromCodePoint(codePoint);
      return match;
    }

    // named entity
    const lower = token.toLowerCase();
    return Object.prototype.hasOwnProperty.call(namedEntities, lower)
      ? namedEntities[lower]
      : match; // leave untouched if unknown
  });
}

export function fixQuizData(data) {
  return data.map((item) => ({
    ...item,
    question: decodeHTMLEntities(item.question),
    correct_answer: decodeHTMLEntities(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((a) => decodeHTMLEntities(a)),
    category: decodeHTMLEntities(item.category),
  }));
}
