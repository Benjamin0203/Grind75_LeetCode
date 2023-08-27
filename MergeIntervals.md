# [Merge Intervals]

(https://leetcode.com/problems/merge-intervals/description/)

## 56

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

# Solution: Java

```java
class Solution {
public int[][] merge(int[][] intervals) {
Arrays.sort(intervals, (o1, o2) -> o1[0] - o2[0]);

        ArrayList<int[]> ans = new ArrayList<>();
        int start = intervals[0][0];
        int end = intervals[0][1];

        int i = 1;
        while (i < intervals.length) {
            int s = intervals[i][0];
            int e = intervals[i][1];

            if (s <= end) {
                end = Math.max(end, e);
            } else {
                ans.add(new int[]{start, end});
                start = s;
                end = e;
            }
            i++;
        }
        ans.add(new int[] {start, end});
        return ans.toArray(new int[0][]);
    }

}
```

# Solution: Python

```python
class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """

        out = []
        for i in sorted(intervals, key=lambda i: i[0]):
            # The sorted() function is used to sort the intervals based on their start points (i[0]).
            # lambda i: i[0] is a lambda function. A lambda function is a small, anonymous function in Python. In this case, the lambda function takes one argument, i, and returns i[0].
            if out and i[0] <= out[-1][1]:
                #if the current interval begins before the previous interval ends, then we know that they overlap.
                out[-1][1] = max(out[-1][1], i[1])
                # we merge the two intervals by updating the end of the previous interval if it is less than the end of the current interval.
            else:
                # Otherwise, we add the current interval to the output array.
                out += [i]
        return out
```
