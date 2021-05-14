# Shift Method - removes the first element from an array and returns that removed element. This method changes the length of the array.

## Time Complexity - O(n) Linear

### Example 1

```
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Output: [2, 3]

console.log(firstElement);
// Output: 1
```

### Example 2 - using shift and a while loop to log each name

```
let names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( typeof (i = names.shift()) !== 'undefined' ) {
    console.log(i);
}
// Output:  Andrew, Edward, Paul, Chris, John

```

### Example 3 - combine with sort to remove the smallest number in an array

```
let array = [100, 58, 75, 64, 2]
array.sort((a, b) => a - b).shift()

console.log(array)
// Output: [58, 64, 75, 100]

```
