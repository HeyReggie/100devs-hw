# Split Method - divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

## Time Complexity - Linear O(n)

### Example 1 -

```
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
```

### Example 2 -

```
const str = 'The quick brown fox jumps over the lazy dog.';

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
```

### Example 3 -

const str = 'The quick brown fox jumps over the lazy dog.';

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

```

```
