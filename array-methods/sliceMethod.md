# Slice Method - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

## Time Complexity - O(n) Linear

### Example 1 - remove all the elements from the 2nd index on

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Output: Array ["camel", "duck", "elephant"]
```

### Example 2 - return a portion on an existing array

```
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### Example 3 - return the last 2 elements of an array of unknown size

```
let array = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8]
console.log(array.slice(-2))
// Output: [7, 8]
```
