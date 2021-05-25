# Includes Method - performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate. It takes in a string to search for and an optional position to begin searching from.

## Time Complexity - Linear O(n)

### Example 1 -

```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
```

### Example 2 - case sensitivity

```
'Blue Whale'.includes('blue')  // returns false
```

### Example 3 - Is Leon a baller?

```
const Leon = 'Baller baller baller'
console.log(Leon.includes('baller'))
// true
```
