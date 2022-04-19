import capitalizeAllWords from "../src/capitalizeAllWords";

describe("capitalizeAllWords", () => {
  it("should have all words capitalized", () => {
    expect(capitalizeAllWords("hello mamma")).toEqual("Hello Mamma");
  });

  it("should have all words capitalized for a single word", () => {
    expect(capitalizeAllWords("hello")).toEqual("Hello");
  });

  it("should return an empty string when there's no input", () => {
    expect(capitalizeAllWords()).toEqual("");
  });
});
