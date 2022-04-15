import bubbleSort from "../src/bubbleSort";

describe("Bubble sort", () => {
  it("should return empty list when the input is empty", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return sorted letters list", () => {
    const result = bubbleSort(["b", "a", "c", "z", "h"]);
    const expected = ["a", "b", "c", "h", "z"];
    expect(result).toEqual(expected);
  });

  it("should return sorted numbers list", () => {
    const result = bubbleSort([4, 16, 1, 32, 8]);
    const expected = [1, 4, 8, 16, 32];
    expect(result).toEqual(expected);
  });

  it("should return sorted list with all equal values", () => {
    const result = bubbleSort([7, 7, 7, 7, 7]);
    const expected = [7, 7, 7, 7, 7];
    expect(result).toEqual(expected);
  });

  it("should return sorted list from a one element list", () => {
    const result = bubbleSort(["z"]);
    const expected = ["z"];
    expect(result).toEqual(expected);
  });

  it("should return sorted list from an already sorted list", () => {
    const result = bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).toEqual(expected);
  });
});
