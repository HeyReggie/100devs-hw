# Pop Method - removes the last element from an array and returns that element. This method changes the length of the array.

## Time Complexity - O(n) Linear

### Example 1

```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop());
// Output: "tomato"

console.log(plants);
// Output: ["broccoli", "cauliflower", "cabbage", "kale"]
```

### Example 2 - put the last element in a new variable

```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

let popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### Example 3 - combine with sort to remove the largest number in an array

```
let array = [2, 4, 1, 6, 75, 5]
array.sort((a, b) => a - b).pop()

console.log(array)
// Output: [1, 2, 4, 5, 6]

```
