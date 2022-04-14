function isEqual(word1: string, word2: string): boolean {
  return word1 === word2;
}

function reverse(word: string): string {
  return word.split("").reverse().join("");

  /* return word
    .split("")
    .reduceRight((reversedWord, letter) => reversedWord.concat(letter), ""); */
}

/**
 * Palindrome check
 */
export function isPalindrome(word: string) {
  return isEqual(reverse(word), word);
}
