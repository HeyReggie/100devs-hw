# Sort Method - sorts the elements of an array in place and returns the sorted array. You must include a comparison function when sorting numbers else the default is to convert to strings and sort by UTF-16 code units values.

## Time complexity - O(N log N) Logarithmic Complexity typically but can vary based on implementation.

### Example 1 - sort an array of numbers in ascending order

```
let numbers = [4, 2, 5, 1, 3, 6]
numbers.sort((a, b) => a - b)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 6]
```

### Example 2 - sort an object of students by grade

```
const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
];
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade)

console.log(students)
// Output: [
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 }
]
```

### Example 3 - Default sort for strings is alphabetical

```
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'giraffe']
animals.sort()

console.log(animals) // Output: ['ant', 'bee', 'cat', 'dog', 'elephant', 'giraffe']
```
