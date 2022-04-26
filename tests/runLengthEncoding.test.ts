import { encode, decode } from "../src/runLengthEncoding";

describe("runLengthEncoding", () => {
  describe("encode", () => {
    it("should return an empty output when the input is empty", () => {
      expect(encode("")).toBe("");
    });

    it("should return an encoded with repeated chars together", () => {
      const input = "aaabbcccc";
      const expectedOutput = "3a2b4c";

      const result = encode(input);

      expect(result).toBe(expectedOutput);
    });

    it("tests no consecutive equal elements", () => {
      const input = "abcabcabc";
      const expectedOutput = "1a1b1c1a1b1c1a1b1c";

      const result = encode(input);

      expect(result).toBe(expectedOutput);
    });

    it("should encode repeated chars with more that one digits", () => {
      const input = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWBWWWW";
      const expectedOutput = "12W1B12W3B4W1B4W";

      const result = encode(input);

      expect(result).toBe(expectedOutput);
    });
  });

  describe("decode", () => {
    it("should return an empty output when the input is empty", () => {
      expect(decode("")).toBe("");
    });

    it("should return a decoded string from encoded input with repeated chars together", () => {
      const input = "12W1B12W3B4W1B4W";
      const expectedOutput = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWBWWWW";

      const result = decode(input);

      expect(result).toBe(expectedOutput);
    });

    it("should decode a three a code that uses 3 digits for repetition", () => {
      const input = "128K";
      const expectedOutput =
        "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK";

      const result = decode(input);

      expect(result).toBe(expectedOutput);
    });
  });
});
