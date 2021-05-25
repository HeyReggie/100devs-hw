# Concat Method - concatenates the string arguments to the calling string and returns a new string. Takes in one or more strings to concatenate.

## Time Complexity - Constant O(1)

### Example 1 -

```
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
```

### Example 2 -

```
let hello = 'Hello, '
console.log(hello.concat('Leon', '. Have a nice day.'))
// Hello, Leon. Have a nice day.
```

### Example 3 -

```
let greetList = ['Hello', ' ', 'Leon', '!']
"".concat(...greetList)  // "Hello Leon!"
```
