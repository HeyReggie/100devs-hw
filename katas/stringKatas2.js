// 1. Disemvowel Trolls
// Link to Kata: https://www.codewars.com/kata/52fba66badcd10859f00097e

// Solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// 2. Complementary DNA
// Link to Kata: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// Solution

function DNAStrand(dna) {
  return dna.replace(/./g, function (symbol) {
    return DNAStrand.pairs[symbol];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

// 3. Isograms
// Link to Kata: https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Solution

const isIsogram = (word) => {
  return new Set(word.toLowerCase()).size === word.length;
};

// 4. Credit Card Mask
// Link to Kata: https://www.codewars.com/kata/5412509bd436bd33920011bc

// Solution

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

// 5. Reversed Words
// Link to Kata: https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// Solution

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
