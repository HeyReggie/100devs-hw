# Map Method - creates a new array containing the results of calling a given function on every element in the array the method is called on.

## Time Complexity - O(n) Linear because it scales in proportion to the number of elements.

### Example 1 - return all the elements in an array squared

```
const arrSquared = (arr) => {
  let newArr = arr.map((el) => Math.pow(el, 2));
  console.log(newArr);
  };

arrSquared([1, 2, 3, 4, 5]); // Output: [1, 4, 9, 16, 25]
```

### Example 2 - reformatting an array of objects

```
let array = [{key: 1, value: 10},
             {key: 2, value: 20},
             {key: 3, value: 30}]

let reformattedArray = array.map(obj => {
  let newObj = {}
  newObj[obj.key] = obj.value
  return newObj
}) // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}]
```

### Example 3 - return the values of an array multiplied together in order

```
const multiplyValues = arr => {
  let total = 1
  arr.map(el => total *= el)
  console.log(total)
}

multiplyValues([1, 2, 3, 4]) // Output: 24
```
