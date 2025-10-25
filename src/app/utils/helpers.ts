export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; // copy so we don't mutate original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index 0..i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
}
