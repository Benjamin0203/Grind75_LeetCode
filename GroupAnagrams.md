# [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

## Number: 49

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```java
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

Example 2:

```java
Input: strs = [""]
Output: [[""]]
```

Example 3:

```java
Input: strs = ["a"]
Output: [["a"]]
```

# Solution

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            String s1 = strs[i];
            char[] arr = s1.toCharArray();
            Arrays.sort(arr);
            String str = new String(arr);

            if (map.containsKey(str)) {
                //get key: str, the value ArrayList<>() add: s1
                map.get(str).add(s1);
            } else {
                //create key: str, the value is an empty ArrayList<>()
                map.put(str, new ArrayList<>());
                map.get(str).add(s1);
            }
        }
        return new ArrayList<>(map.values());
    }
}
```
