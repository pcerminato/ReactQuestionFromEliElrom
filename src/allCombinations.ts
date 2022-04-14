/* 
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g 
*/

export default function allCombinations(text: string): string[] {
  const letters = Array.from(text);
  const combinations: string[] = [];

  for (let i = 0; i < letters.length; i++) {
    const head = letters[i];
    let tail = "";

    combinations.push(head);

    for (let j = i + 1; j < letters.length; j++) {
      tail = tail.concat(letters[j]);
      combinations.push(head.concat(tail));
    }
  }

  return combinations;
}
