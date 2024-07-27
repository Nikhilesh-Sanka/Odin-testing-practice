export function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}
export function reverseString(string) {
  return string.split("").reverse().join("");
}
export let calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};
export function caesarCipher(string, num) {
  let finalString = "";
  for (let char of string) {
    finalString += getShiftedCharacter(char, num);
  }
  return finalString;
}
export function getShiftedCharacter(char, num) {
  if (char >= "a" && char <= "z") {
    let charCode = char.charCodeAt(0);
    return String.fromCharCode(
      charCode + num > 122 ? 97 + (num - (122 - charCode) - 1) : charCode + num
    );
  }
  if (char >= "A" && char <= "Z") {
    let charCode = char.charCodeAt(0);
    return String.fromCharCode(
      charCode + num > 90 ? 65 + (num - (90 - charCode) - 1) : charCode + num
    );
  }
  return char;
}
export function analyzeArray(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let average = array.reduce((a, b) => b + a, 0) / array.length;
  return {
    average,
    length: array.length,
    min: sortedArray[0],
    max: sortedArray[array.length - 1],
  };
}
