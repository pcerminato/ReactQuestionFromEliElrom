export default function findMissingNumbers(list: number[]): number[] {
  const missingNumbers: number[] = [];

  for (let i = 0; i < list.length - 1; i++) {
    const current: number = list[i];
    const expectedNext: number = current + 1;
    const next = list[i + 1];

    if (next !== expectedNext) {
      // add all missing numbers in a range
      /* if next and expectedNext are equal, 
      the for-loop won't run, because there's no gap in between values 
      */
      for (let missing = current; missing < next - 1; missing++) {
        missingNumbers.push(missing + 1);
      }
    }
  }

  return missingNumbers;
}
