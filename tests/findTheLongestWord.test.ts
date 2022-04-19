import findTheLongestWord from "../src/findTheLongestWord";

describe("findTheLongestWord", () => {
  it("should return an empty string when there's no input value", () => {
    expect(findTheLongestWord()).toEqual("");
  });

  it("should return 'things'", () => {
    const text = "There are many things that I would like to say to you";
    const textWithoutExpectedResult =
      "There are many that I would like to say to you";
    const result = findTheLongestWord(text);

    expect(result).toEqual("things");
    expect(textWithoutExpectedResult).not.toContainEqual(result);
  });
});
