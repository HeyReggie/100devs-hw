# Substr Method - returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

## Time Complexity - Linear O(n)

### Example 1 -

```
const str = 'Mozilla';

console.log(str.substr(1, 2));
// Output: 'oz'
```

### Example 2 -

```
const str = 'Leon is Ballin';

console.log(str.substr(8))
// Output: 'Ballin'
```

### Example 3 - using negative input

```
const str = 'Mozilla';

console.log(str.substr(-1, 1))
// Output: 'a'
```
