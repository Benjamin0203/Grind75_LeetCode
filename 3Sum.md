# [3Sum](https://leetcode.com/problems/3sum/)

---
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```
Example 2:
```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```
Example 3:
```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```
---

# Soution

```javascript
var threeSum = function(nums, target = 0) {
    const result = [];
    
    // we need 3 values for this to work
    // so return an empty array if we have less than 3
    if (nums.length < 3) {
        return result;
    }
    
    // sorting is ok because the function is already O(n^2)
    // and sort is O(nlogn)
    // this also lets us stop iterating once weve passed the target value
    nums = nums.sort((a,b) => a - b );
    
    // well use i as our anchor as we move through the array
    // we stop at nums.length - 2 to prevent undefined for k
    for (let i = 0; i < nums.length - 2; i++) {
	
        // because we sorted the array already
        // we can stop here if the current iterator is greater than the target value
        if (nums[i] > target) {
            break;
        }
		
        // if our iterator is the same as the previous value
        // skip it to prevent duplicate results
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
		
        // start j at i + 1
        let j = i + 1;
		
        // start k at end of array
        let k = nums.length - 1;
        
        // walking j and k towards each other to find all possible values
        // with i as our anchor value
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                
                // skip duplicate values of j and k
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                
                // move j and k inward
                j++;
                k--;
                continue;
            }
            if (sum < target) {
                j++;
                continue;
            }
            if (sum > target) {
                k--;
                continue;
            }
        }
    }
    return result;
};
```