export default function findTheLongestWord(text = ""): string {
  const words = text.split(" ");
  let longestWord = "";
  let longestWordLength = -1;

  words.forEach((word) => {
    const currentWordLength = word.length;

    if (currentWordLength > longestWordLength) {
      longestWord = word;
      longestWordLength = currentWordLength;
    }
  });

  return longestWord;
}
