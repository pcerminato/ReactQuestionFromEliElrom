import shuffleArray from "../src/shuffleArray";

describe("shuffleArray", () => {
  test("returns an empty array when the input is an empty array", () => {
    const result: number[] = shuffleArray([]);

    expect(result).toEqual([]);
  });

  test("two-items array is shuffled", () => {
    const input = [1, 2];
    const result: number[] = shuffleArray(input);
    const expectedResult = [2, 1];

    expect(result).toEqual(expectedResult);
    expect(result).not.toEqual(input);
  });

  test("n-items array is shuffled", () => {
    const input = [1, 2, 3];
    const result: number[] = shuffleArray(input);

    expect(input.length).toEqual(result.length);
    expect(input).not.toEqual(result);
  });
});
