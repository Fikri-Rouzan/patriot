/* eslint-disable no-undef */
import { calculateResult } from "./QuizUtilities";

describe("calculateResult", () => {
  test("Should return matching correct answers", () => {
    expect(calculateResult([1, 0, 0], [1, 0, 2])).toBe(2);
  });
});
