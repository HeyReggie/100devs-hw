# Slice Method - extracts a section of a string and returns it as a new string, without modifying the original string. Takes in a beginning index and an optional ending index.

## Time Complexity - Constant O(1)

### Example 1 -

```
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```

### Example 2 - no parameter given

```
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice())
// Output: 'The quick brown fox jumps over the lazy dog.'
```

### Example 3 - parameter outside of the range

```
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(50))
// Output: ''
```
