# [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/)

---
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```
Example 2:

```
Input: s = "cbbd"
Output: "bb"
 ```

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

```javascript
var longestPalindrome = function(s) {
    
}
```

# Solution

- JavaScript

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let chr = "";
    let bool = true;
    let maxLen = 1;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        chr = "";
        for (let j = i; j < s.length; j++) {
          bool = true;
          chr += s[j];
          for(let k = 0, m = chr.length - 1; k <= 1; k++, m--) {
              if (chr[k] !== chr[m]) {
                  bool = false;
                  break;
              }
          }
          if (bool === true) {
              if (chr.length >= maxLen) {
                  maxLen = chr.length;
                  res = chr;
              }
          }
        }
    }
    return res;
};
```
