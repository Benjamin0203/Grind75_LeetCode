# [Insertion Sort](https://www.greatfrontend.com/questions/javascript/insertion-sort)

---

Implement a function that performs an insertion sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified.
![example1](https://www.greatfrontend.com/img/questions/insertion-sort/insertion-sort-input-output.png)

Examples:

insertionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]

---

# Solution `O(n2)`

```javascript
/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr) {
  // Iterate through the array, starting with the 2nd element.
  for (let i = 1; i < arr.length; i++) {
    // Store the current value in a variable so it
    // can be shifted to the correct position after the comparisons.
    let currentValue = arr[i];

    // Initialize a pointer for the index of the previous element
    // so we can use it to iterate progressively backwards
    // through preceding elements.
    let j = i - 1;

    // Keep iterating backwards through preceding elements
    // as long as the previous element is greater than the current value.
    while (j >= 0 && arr[j] > currentValue) {
      // "Move" the previous element one position to the right.
      // if it's bigger than currentValue.
      arr[j + 1] = arr[j];

      // Decrement the pointer so as to keep comparing with the
      // previous element.
      j--;
    }

    // Set the currentValue into its final position.
    arr[j + 1] = currentValue;
  }

  // Return the sorted array.
  return arr;
}
```

# Solution 2

```js
export default function insertionSort(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}
```
