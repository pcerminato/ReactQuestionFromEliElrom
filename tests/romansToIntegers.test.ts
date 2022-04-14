import romansToIntegers, { hasNext } from "../src/romansToIntegers";

describe("Romans to integers", () => {
  it("should convert I to 1", () => {
    const result = romansToIntegers("I");

    expect(result).toEqual(1);
  });

  it("should convert III to 3", () => {
    const result = romansToIntegers("III");

    expect(result).toEqual(3);
  });

  it("should convert IV to 4", () => {
    const result = romansToIntegers("IV");

    expect(result).toEqual(4);
  });

  it("should convert IX to 9", () => {
    const result = romansToIntegers("IX");

    expect(result).toEqual(9);
  });

  it("should convert LVIII to 58", () => {
    const result = romansToIntegers("LVIII");

    expect(result).toEqual(58);
  });

  it("should convert MCMXCIV to 1994", () => {
    const result = romansToIntegers("MCMXCIV");

    expect(result).toEqual(1994);
  });

  it("should return -1 when input has an empty roman char", () => {
    const result = romansToIntegers("");

    expect(result).toEqual(-1);
  });
});

describe("hasNext", () => {
  it("should have next", () => {
    expect(hasNext([1, 2, 3, 4], 2)).toEqual(true);
  });

  it("should not have next", () => {
    expect(hasNext([1, 2, 3, 4], 3)).toEqual(false);
  });
});
