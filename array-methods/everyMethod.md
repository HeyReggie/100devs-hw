# Every Method - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

## Time Complexity - O(n) Linear

### Example 1 - testing size of all array elements

```
[12, 5, 8, 130, 44].every(x => x >= 10);   // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```

### Example 2 - checking if users are active

```
const users = [
  {name:'Luis', active:true},
  {name:'Jose', active:true},
  {name:'Aaron', active:false}
];
const isAllUsersActive = users.every(item => item.active);
console.log(isAllUsersActive); // false
```

### Example 3 - seeing if elements are below a certain threshold

```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```
