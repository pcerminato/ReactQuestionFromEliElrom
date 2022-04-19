/**
 * Capitalizes the first letter of every word.
 */
export default function capitalizeAllWords(text = ""): string {
  const words = text ? text.split(" ") : [];
  const capitalizedWords = words.map((word) => {
    const chars = word.split("");
    const [first, ...rest] = chars;
    return [first.toLocaleUpperCase(), ...rest].join("");
  });

  return capitalizedWords.join(" ");
}
