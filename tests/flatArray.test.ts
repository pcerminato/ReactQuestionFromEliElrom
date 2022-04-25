import flatArray from "../src/flatArray";

describe("flatArray", () => {
  test("empty input, empty output", () => {
    const input = [];
    const result = flatArray(input);

    expect(result).toEqual([]);
  });

  test("already flat array", () => {
    const input = [1, 2, 3, 4];
    const result = flatArray(input);

    expect(result).toEqual(input);
  });

  test("flat one level nested array", () => {
    const input = [1, [2, 3], 4];
    const result = flatArray(input);
    const expectedOut = [1, 2, 3, 4];

    expect(result).toEqual(expectedOut);
  });

  test("all elements are nested arrays", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const result = flatArray(input);
    const expectedOut = [1, 2, 3, 4];

    expect(result).toEqual(expectedOut);
  });

  test("flat multy level nested array", () => {
    const input = [1, [2, [3, [4, 5]]], 6];
    const result = flatArray(input);
    const expectedOut = [1, 2, 3, 4, 5, 6];

    expect(result).toEqual(expectedOut);
  });
});
