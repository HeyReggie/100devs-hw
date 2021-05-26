# Trim Method - removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)

## Time Complexity - Constant O(n)

### Example 1 -

```
const greeting = '   Hello world!   ';

console.log(greeting.trim())
// Output: 'Hello World!'
```

### Example 2 -

```
const greeting = 'Hello World';

console.log(greeting.trim())
// Output: 'Hello World'
```

### Example 3 -

```
const trimIt = str => {
    console.log(str.trim());
}

trimIt('      Reginald      ')
// Output: 'Reginald'
```
