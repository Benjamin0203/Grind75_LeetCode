# [Binary Search](https://www.greatfrontend.com/questions/javascript/binary-search)

---

Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find. It returns the index of the target element or -1, if the target element doesn't exist in the array.

Examples
binarySearch([1, 2, 3, 6, 9, 11], 6); // 3

binarySearch([1, 2, 3, 12, 16, 14], 5); // -1

---

# Solution 1:

```javascript
/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target Target integer to search within the array
 * @return {number} Index of target element in the array, or -1 if not found
 */
export default function binarySearch(arr, target) {
  // Initialize the left and right indices of the array
  let left = 0;
  let right = arr.length - 1;

  // Keep searching until the left and right indices meet.
  while (left <= right) {
    // Calculate the mid index to retrieve the mid element later.
    const mid = Math.floor((left + right) / 2);

    if (target < arr[mid]) {
      // If the target element is less than the middle element,
      // search the left half of the array.
      // Adjust the right index so the next loop iteration
      // searches the left side.
      right = mid - 1;
    } else if (target > arr[mid]) {
      // If the target element is greater than the middle element,
      // search the right half of the array.
      // Adjust the left index so the next loop iteration
      // searches the left side.
      left = mid + 1;
    } else {
      // If the target element is equal to the middle element,
      // return the index of the middle element.
      return mid;
    }
  }

  // If the element is not found, return -1.
  return -1;
}
```

---

# Solution 2 (Recursive)

```javascript
/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target Target integer to search within the array
 * @return {number} Index of target element in the array, or -1 if not found
 */
export default function binarySearch(arr, target) {
  return binarySearchImpl(arr, target, 0, arr.length - 1);
}

function binarySearchImpl(arr, target, left, right) {
  // Return immediately if the range to search is empty,
  // since the target element hasn't been found / won't be found.
  if (left > right) {
    return -1;
  }

  // Calculate the mid index to retrieve the mid element later.
  const mid = Math.floor((left + right) / 2);

  if (target < arr[mid]) {
    // If the target element is less than the middle element,
    // search the left half of the array and adjust the input
    // array passed into the recursive call accordingly.
    return binarySearchImpl(arr, target, left, mid - 1);
  }

  if (target > arr[mid]) {
    // If the target element is greater than the middle element,
    // search the right half of the array and adjust the input
    // array passed into the recursive call accordingly.
    return binarySearchImpl(arr, target, mid + 1, right);
  }

  // If the target element is equal to the middle element,
  // return the index of the middle element
  return mid;
}
```

---

# Time Conplexity

`O(log(n))`
