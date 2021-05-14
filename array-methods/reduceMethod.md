# Reduce Method - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

The **reducer** function takes in four arguments:

1. Accumulator
2. Current Value
3. Current Index
4. Source Array

The returned value of the reducer function is assigned to the accumulator and, after being remembered across each iteration, becomes the final, single result.

## Time Complexity - O(n) Linear because it iterates through all the elements once.

### Example 1 - return the total sum of all the elements in an array

```
const array = [1, 2, 3, 4, 5]
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer)) // Output: 15
```

### Example 2 - flatten an array of arrays

```
let arrayOfArrays = [[0, 1], [2, 3], [4, 5]]
let reducer = (acc, cVal) => acc.concat(cVal)
let flattened = arrayOfArrays.reduce(reducer)
console.log(flattened) // Output: [0, 1, 2, 3, 4, 5]
```

### Example 3 - Counting instances of values in an object

```
let names = ['Bob', 'Leon', 'John', 'Bob', 'Bobberson', 'John', 'Bob']

let countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
}, {})
console.log(countedNames)
//Output: { Bob: 3, Bobberson: 1, John: 2, Leon: 1}
```
