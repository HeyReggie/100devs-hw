# toUpperCase Method - returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

## Time Complexity - Linear O(n)

### Example 1 -

```
const name = 'reginald'

console.log(name.toLowerCase())
// Output: 'REGINALD'
```

### Example 2 - type coercion

```
const thisIshIs = 'b' + 'a' + + 'a' + 'a' + 's'

console.log(thisIshIs.toUpperCase())
// Output: BANANAS
```

### Example 3 - doesn't affect original string

```
const lowerCase = 'hello world'
const upperCase = lowerCase.toUpperCase()

console.log(lowerCase) // 'hello world'
console.log(upperCase) // 'HELLO WORLD'
```
