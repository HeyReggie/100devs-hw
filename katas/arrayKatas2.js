// 1. Count of positives / sum of negatives
// Link to Kata: https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Solution
function countPositivesSumNegatives(input) {
  if (input == [] || input == null || input.length === 0) {
    return [];
  } else {
    let positiveCount = 0;
    let negativeSum = 0;
    input.forEach((el) => {
      el > 0 ? positiveCount++ : (negativeSum += el);
    });
    return [positiveCount, negativeSum];
  }
}

// 2. Odd or Even?
// Link to Kata: https://www.codewars.com/kata/5949481f86420f59480000e7

// Solution
function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  }
  let sum = 0;
  array.forEach((el) => (sum += el));
  return sum % 2 === 0 ? "even" : "odd";
}

// 3. Sum of the first nth term of Series
// Link to Kata: https://www.codewars.com/kata/555eded1ad94b00403000071

// Solution
const SeriesSum = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
};

// 4. Ones and Zeros
// Link to Kata: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// Solution
const binaryArrayToNumber = (arr) => {
  let binaryStr = arr.join("");
  return parseInt(binaryStr, 2);
};

// 5. Sum of two lowest positive integers
// Link to Kata: https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Solution
function sumTwoSmallestNumbers(numbers) {
  let sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
