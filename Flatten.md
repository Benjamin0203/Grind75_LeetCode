# [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)

Implement a function flatten, that flattens arrays with arbitrary levels of nesting, and recursively concatenates all arrays within it into an array containing only a single level.

Examples

```js
// Single-level arrays are unaffected
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
```

---

```js
export default function flatten(value) {
  //write your answer
}
```

# Solution

```js
export default function flatten(value) {
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }
  return value;
}
```
