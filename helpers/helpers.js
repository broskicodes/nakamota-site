
export const titlize = (str) => {
  let words = str.includes(" ") ? str.split(" ") : str.split("_");
  let cappedWords = words.map((w) => {
    return w[0].toUpperCase() + w.slice(1);
  });

  return cappedWords.join(" ");
}