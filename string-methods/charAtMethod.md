# charAt Method - returns a new string consisting of the single UTF-16 code unit located at the index given. If no parameter is given, then the first element or zero index is returned. If index is out of range, then an empty string is returned.

## Time Complexity - Constant O(1)

### Example 1 -

```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Output: "The character at index 4 is q"
```

### Example 2 - without a parameter

```
const word = "Hello"
console.log(word.charAt())
// Output: "H"

```

### Example 3 - index given is out of range

```
const str = "Hello World"
console.log(str.charAt(20))
// Output: ""
```
