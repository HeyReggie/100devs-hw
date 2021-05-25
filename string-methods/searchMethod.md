# Search Method - executes a search for a match between a regular expression and this String object. Returns the index of the first match or -1 if no match is found.

## Time Complexity - Linear O(n)

### Example 1 -

```
let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation
```

### Example 2 -

```
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
```

### Example 3 - No match

```
let re = /[0-9]/;
let str = 'Hello, JavaScript!';
let index = str.search(re);

console.log(index); // -1
```
