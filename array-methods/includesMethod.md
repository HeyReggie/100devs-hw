# Includes Method - determines whether an array includes a certain value among its entries, returning true or false as appropriate.

## Time Complexity - O(n) Linear

### Example 1 - does the array contain a given number

```
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Output: true
```

### Example 2 - doesn't work on part of an element

```
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Output: true

console.log(pets.includes('at'));
// Output: false
```

### Example 3 - Includes has an optional second arg of fromIndex telling it where to begin searching. If the computed index of fromIndex is less or equal than -1 \* arr.length, the entire array will be searched.

```
let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
```
