import findMissingNumbers from "../src/findMissingNumbers";

describe("findMissingNumbers", () => {
  test("no missing numbers in an empty array", () => {
    const result = findMissingNumbers([]);

    expect(result.length).toEqual(0);
  });

  test("no missing numbers", () => {
    const result = findMissingNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(result.length).toEqual(0);
  });

  test("no missing numbers in a one-element array", () => {
    const result = findMissingNumbers([1]);

    expect(result.length).toEqual(0);
  });

  test("find missing number in a two-element consecutive array", () => {
    const result = findMissingNumbers([1, 3]);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(2);
  });

  test("find missing numbers when the gap in larger that one number", () => {
    const result = findMissingNumbers([2, 4, 8, 16]);
    const expectedResult = [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];

    expect(result).toEqual(expectedResult);
  });

  test("when the same number is followed in a row is ignored", () => {
    const result = findMissingNumbers([1, 1, 3, 4, 7]);
    const expectedResult = [2, 5, 6];

    expect(result).toEqual(expectedResult);
  });

  test("when an array has all items equal, is treated an a oner", () => {
    const result = findMissingNumbers([1, 1, 1, 1, 1, 1]);

    expect(result.length).toEqual(0);
  });

  // what happens if the current number and the expected next are equal?
});
