# Filter Method - creates a new array with all the elements that pass the test implemented by the provided function.

## Time Complexity - O(n) Linear because it is performed once on each element.

### Example 1 - given an array of strings, return a new array containing the strings longer that 4 characters.

```
let names = ['Bob', 'Reggie', 'John', 'Bobberson', '100Devs', 'Leon']
let longerNames = names.filter(name => name.length > 4)

console.log(longerNames) // Output: ['Reggie', 'Bobberson', '100Devs']
```

### Example 2 - return all the prime numbers from an array

```
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // Output: [2, 3, 5, 7, 11, 13]
```

### Example 3 - given an array of mixed data types, return a new array containing only the numbers

```
const mixedArray = ['Bob', 4, 5, 2, 3, 'John', false, { foo: 'bar'}]
const numbers = mixedArray.filter(el => typeof el === 'number')

console.log(numbers) // Output: [4, 5, 2, 3]
```
