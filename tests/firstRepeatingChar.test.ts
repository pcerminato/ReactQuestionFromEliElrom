import firstRepeatedChar from "../src/firstRepeatingChar";

describe("Q5: firstRepeatedChar", () => {
  it("should return undefined when no arguments passed in", () => {
    expect(firstRepeatedChar()).toBeUndefined();
  });

  it("should not find any repeated char", () => {
    const charsArr = Array.from("12345abcde");
    expect(firstRepeatedChar(charsArr)).toBeUndefined();
  });

  it("should return 1 as the first repeated char", () => {
    const charsArr = Array.from("12345678910");
    expect(firstRepeatedChar(charsArr)).toEqual("1");
  });

  it("should return 3 as the first repeated char", () => {
    const charsArr = Array.from("3111111111113");
    expect(firstRepeatedChar(charsArr)).toEqual("3");
  });
});
