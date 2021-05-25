# Repeat Method - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. You will get RangeError if the repeat count is negative or infinity.

## Time Complexity - Linear O(n)

### Example 1 -

```
const dontTryThisAtHome = "Beetlejuice "
console.log(dontTryThisAtHome.repeat(3))
// "Beetlejuice Beetlejuice Beetlejuice "
```

### Example 2 - RangeError

```
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError
```

### Example 3 - 21

```
const bestRapper = "21 "
console.log(`Best rapper alive is ${bestRapper.repeat(21)}`)
// "Best rapper alive is 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 "
```
