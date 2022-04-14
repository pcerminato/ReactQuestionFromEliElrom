import { isPalindrome } from "../src/palindrome";

describe("isPalindrome", () => {
  it("should be a valid palindrome", () => {
    const palindrome = isPalindrome("madam");
    expect(palindrome).toBe(true);
  });

  it("should not be a valid palindrome", () => {
    const palindrome = isPalindrome("whatever");
    expect(palindrome).toBe(false);
  });
});
