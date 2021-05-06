// 1. Get the mean of an array
// Link to Kata: https://www.codewars.com/kata/563e320cee5dddcf77000158

// Solution

function getAverage(marks) {
  let total = 0;
  marks.forEach((x) => (total += x));
  return Math.floor(total / marks.length);
}

// 2. Convert number to reversed array of digits
// Link to Kata: https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Solution

function digitize(n) {
  let arr = Array.from(String(n), Number).reverse();
  return arr;
}

// 3. Lost Without a Map
// Link to Kata: https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// Solution

function maps(x) {
  return x.map((el) => el * 2);
}

// 4. A Needle in the Haystack
// Link to Kata: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// Solution

function findNeedle(haystack) {
  let position = haystack.indexOf("needle");
  return `found the needle at position ${position}`;
}

// 5. Counting sheep...
// Link to Kata: https://www.codewars.com/kata/54edbc7200b811e956000556

// Solution

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}
