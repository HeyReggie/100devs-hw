# toLowerCase Method - returns the calling string value converted to lower case.

## Time Complexity - Linear O(n)

### Example 1 -

```
const name = 'Reginald'

console.log(name.toLowerCase())
// Output: 'reginald'
```

### Example 2 -

```
console.log('ALPHABET'.toLowerCase()); // 'alphabet'
```

### Example 3 - doesn't affect original string

```
const upperCase = 'HELLO WORLD'
const lowerCase = upperCase.toLowerCase()

console.log(upperCase) // 'HELLO WORLD'
console.log(lowerCase) // 'hello world'
```
