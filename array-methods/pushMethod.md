# Push Method - adds one or more elements to the end of an array and returns the new length of the array.

## Time Complexity - O(1) Constant Time because it will always take the same amount of time regardless of the size of the array.

### Example 1 - add an element to an array and return the new length

```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Output: 4
console.log(animals);
// Output: Array ["pigs", "goats", "sheep", "cows"]
```

### Example 2 - put one array inside another

```
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

array1.push(array2)
console.log(array1)
// Output: [1, 2, 3, [4, 5, 6]]
```

### Example 3 - combine with forEach to merge two arrays

```
let sports = ['soccer', 'baseball']
let moreSports = ['football', 'swimming', 'basketball', 'badminton', 'gaming']

moreSports.forEach(el => sports.push(el))

console.log(sports)
// Output: ["soccer", "baseball", "football", "swimming", "basketball", "badminton", "gaming"]
```
