# charCodeAt Method - returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. It accepts an index as a parameter and, if none is given, defaults to 0. If the index is out of range, NaN is returned.

## Time Complexity - Constant O(n)

### Example 1 -

```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```

### Example 2 - without a parameter

```
const word = "Hello"
console.log(word.charCodeAt())
// Output: 72

```

### Example 3 - index given is out of range

```
const str = "Hello World"
console.log(str.charCodeAt(20))
// Output: NaN
```
