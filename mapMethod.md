## Map Method - creates a new array containing the results of calling a given function on every element in the array the method is called on.

# Time Complexity - O(n) Linear because it scales in proportion to the number of elements.

# Example 1 - return all the elements in an array squared

`const example1 = (arr) => { let newArr = arr.map((el) => Math.pow(el, 2)); console.log(newArr); }; example1([1, 2, 3, 4, 5]); // Output: [1, 4, 9, 16, 25]`
