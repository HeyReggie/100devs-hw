# forEach Method - executes a provided function once for each array element.

## Time Complexity - O(n) Linear because it scales directly with number of elements.

### Example 1 - log each element once to the console

```
const array = [1, 2, 3]

array.forEach(element => console.log(element))
// Output: 1
// Output: 2
// Output: 3
```

### Example 2 - cube each element in an array

```
const array = [2, 3, 4, 5]
let cubedArray = []

array.forEach(el => cubedArray.push(Math.pow(el, 3)))

console.log(cubedArray) Output: [8, 27, 64, 125]
```

### Example 3 - return the total of multiplying each element in an array in order

```
const array = [1, 2, 3, 4, 5]
let total = 1

array.forEach(el => total *= el)
console.log(total) // Output: 120
```
