# toLowerCase Method - returns the calling string value converted to lower case (the value will be converted to a string if it isn't one)

## Time Complexity - Linear O(n)

### Example 1 -

```
const name = 'Reginald'

console.log(name.toLowerCase())
// Output: 'reginald'
```

### Example 2 - type coercion

```
const thisIshIs = 'B' + 'A' + + 'a' + 'a' + 'S'

console.log(thisIshIs.toLowerCase())
// Output: bananas
```

### Example 3 - doesn't affect original string

```
const upperCase = 'HELLO WORLD'
const lowerCase = upperCase.toLowerCase()

console.log(upperCase) // 'HELLO WORLD'
console.log(lowerCase) // 'hello world'
```
