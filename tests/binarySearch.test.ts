import binarySearch from "../src/binarySearch";

describe("binarySearch", () => {
  const evenArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const oddArray = [0, 1, 2, 3, 4, 5, 6, 7];
  const emptyArray = [];

  it("returns default index when array is empty", () => {
    const index = binarySearch(emptyArray, 1);
    expect(index).toEqual(-1);
  });

  it("finds no result", () => {
    const index = binarySearch(oddArray, 8);
    expect(index).toEqual(-1);
  });

  it("finds the result in the middle of the array", () => {
    const index = Math.floor(evenArray.length / 2);
    expect(binarySearch(evenArray, 4)).toEqual(index);
  });

  it("finds the result in a one-element-array", () => {
    expect(binarySearch([1], 1)).toEqual(0);
  });

  it("finds the result at the first position of the array", () => {
    expect(binarySearch(evenArray, evenArray[0])).toEqual(0);
  });

  it("finds the result at the last position of the array", () => {
    const lastElIndex = evenArray.length - 1;
    expect(binarySearch(evenArray, evenArray[lastElIndex])).toEqual(
      lastElIndex
    );
  });
});
