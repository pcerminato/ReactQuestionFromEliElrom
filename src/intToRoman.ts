const intToRomanMap = new Map<number, string>([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

/**
 * The approach to this exercise is similar to the one
 * for giving currency change.($108= $50, $50, $5, $2, $1)
 */

/**
 * @param int input integer value
 * @returns The roman representation of the input number.
 */
export default function intToRoman(int: number): string {
  // acumulator variable to store the roman result progressivelly
  let result = "";

  // acumulator value to hold the partial int to be converted into roman
  let count = int;

  // all the numbers that represent a single direct roman
  const digits = Array.from(intToRomanMap.keys());

  while (count > 0) {
    let index = 0;
    // use infinitive ensure entering into the while condition the fist time
    let currentIntValue = digits[index];

    // look for the value that
    while (currentIntValue > count) {
      index += 1;
      currentIntValue = digits[index];
    }

    count -= currentIntValue;

    result += intToRomanMap.get(currentIntValue);
  }

  return result;
}
