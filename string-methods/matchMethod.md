# Match Method - retrieves the result of matching a string against a regular expression.

## Time Complexity - Linear O(n)

### Example 1 -

```
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
```

### Example 2 - no parameter

```
const str = "Nothing will come of nothing.";

str.match();   // returns [""]
```

### Example 3 - Using a non-RegExp object as the parameter

```
const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript."
str1.match("number");   // ["number"]
str1.match(NaN);        // ["NaN"]
str1.match(Infinity);   // ["Infinity"]
```
