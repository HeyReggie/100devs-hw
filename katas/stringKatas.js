// 1. Abbreviate a Two Word Name 8kyu
// Link to Kata: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Solution

function abbrevName(name) {
  const initials = name[0] + "." + name[name.indexOf(" ") + 1];
  return initials.toUpperCase();
}

// 2. Returning Strings 8kyu
// Link to Kata: https://www.codewars.com/kata/55a70521798b14d4750000a4

// Solution

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// 3. Convert a String to a Number! 8kyu
// Link to Kata: https://www.codewars.com/kata/544675c6f971f7399a000e79

// Solution

const stringToNumber = (str) => Number(str);

// 4. Remove String Spaces 8kyu
// Link to Kata: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Solution

function noSpace(x) {
  let newStr = x.split(" ").join("");
  return newStr;
}

// 5. Remove First and Last Character
// Link to Kata: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// Solution

function removeChar(str) {
  return str.slice(1, str.length - 1);
}
