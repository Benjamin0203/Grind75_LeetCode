# [Combination Sum](https://leetcode.com/problems/combination-sum/description/)

## 39

## Note

Solution used: [backtracking](./backTracking.md)

## Question

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []

# Solution

```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(list, new ArrayList<>(), candidates, target, 0);
        return list;
    }

    public void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums, int remain, int start) {
        if (remain < 0) {
            return;
        } else if (remain == 0) {
            list.add(new ArrayList<>(tempList));
        } else {
            for (int i = start; i < nums.length; i++) {
                tempList.add(nums[i]);
                backtrack(list, tempList, nums, remain - nums[i], i);
                tempList.remove(tempList.size() - 1);
            }
        }
    }
}
```

## Add-on

### Difference between `int[][] list` and `List<List<Integer>> list`

`int[][] list` is a two-dimensional array of integers, where list is a variable that holds a reference to this array. In other words, list is an array of arrays, where each sub-array is an array of integers.

On the other hand, `List<List<Integer>> list = new ArrayList<>()` is a list of lists, where each element of the outer list is a reference to an inner list that contains integers. This is a more flexible data structure than a two-dimensional array because you can add or remove elements from the inner lists without affecting the size of the outer list.

Here's an example to illustrate the difference:

```java
// Two-dimensional array of integers
int[][] arr = new int[2][3];
arr[0][0] = 1;
arr[0][1] = 2;
arr[0][2] = 3;
arr[1][0] = 4;
arr[1][1] = 5;
arr[1][2] = 6;

// List of lists of integers
List<List<Integer>> list = new ArrayList<>();
list.add(new ArrayList<>());
list.get(0).add(1);
list.get(0).add(2);
list.get(0).add(3);
list.add(new ArrayList<>());
list.get(1).add(4);
list.get(1).add(5);
list.get(1).add(6);

```
