import allCombinations from "../src/allCombinations";

describe("allCombinations", () => {
  it("should combine", () => {
    const word = "dog";
    const combinations = allCombinations(word);
    const expectedCombinations = ["d", "do", "dog", "o", "og", "g"];

    // const expectedCombinations = ["d", "o", "g"];

    expect(combinations).toEqual(expectedCombinations);
  });
});
