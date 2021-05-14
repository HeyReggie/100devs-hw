# Unshift Method - adds one or more elements to the beginning of an array and returns the new length of the array.

## Time Complexity - O(n) Linear because the index of each element must be incremented by one.

### Example 1

```
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Output: 5

console.log(array1);
// Output: Array [4, 5, 1, 2, 3]
```

### Example 2 - put one array inside another at the front

```
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

array1.unshift(array2)
console.log(array1)
// Output: [[4, 5, 6], 1, 2, 3]
```

### Example 3 - combine with forEach to merge two arrays with the second coming before the first

```
let sports = ['soccer', 'baseball']
let moreSports = ['football', 'swimming', 'basketball', 'badminton', 'gaming']

moreSports.forEach(el => sports.unshift(el))

console.log(sports)
// Output: ["gaming", "badminton", "basketball", "swimming", "football", "soccer", "baseball"]
```
