import intToRoman from "../src/intToRoman";

describe("intToRoman", () => {
  it("should return all straight convertions", () => {
    expect(intToRoman(1)).toEqual("I");
    expect(intToRoman(5)).toEqual("V");
    expect(intToRoman(10)).toEqual("X");
    expect(intToRoman(50)).toEqual("L");
    expect(intToRoman(100)).toEqual("C");
    expect(intToRoman(500)).toEqual("D");
    expect(intToRoman(1000)).toEqual("M");
  });

  it("should return 3 as III", () => {
    expect(intToRoman(3)).toEqual("III");
  });

  it("should return 58 as LVIII", () => {
    expect(intToRoman(58)).toEqual("LVIII");
  });

  it("should return 1994 as MCMXCIV", () => {
    expect(intToRoman(1994)).toEqual("MCMXCIV");
  });
});
