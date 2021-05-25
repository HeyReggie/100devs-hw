# indexOf Method - returns the index within the calling String object of the first occurrence of the specified value, starting the search at the beginning or from the optional parameter fromIndex. Returns -1 if the value is not found.

## Time Complexity - Linear O(n)

### Example 1 -

```
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"
```

### Example 2 - case sensitivity

```
const myString    = 'brie, pepper jack, cheddar'
const myCapString = 'Brie, Pepper Jack, Cheddar'

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'))
// logs 19
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'))
// logs -1
```

### Example 3 - counting occurrences of a letter

```
const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count)  // displays 4
```
