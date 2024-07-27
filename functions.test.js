import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  getShiftedCharacter,
  analyzeArray,
} from "./functions.js";

test("capitalizes a string", () => {
  expect(capitalize("fucker")).toBe("Fucker");
  expect(capitalize("bitch")).toBe("Bitch");
  expect(capitalize("shit")).toBe("Shit");
});

test("reverses a string", () => {
  expect(reverseString("fucker")).toBe("rekcuf");
  expect(reverseString("bitch")).toBe("hctib");
  expect(reverseString("shit")).toBe("tihs");
});

test("calculator object calculates numbers correctly", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.sub(1, 2)).toBe(-1);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("returns a caesar ciphered string", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("gives a good analysis of array", () => {
  expect(analyzeArray([3, 1, 4, 2, 5, 9])).toEqual({
    average: 4,
    min: 1,
    max: 9,
    length: 6,
  });
});
