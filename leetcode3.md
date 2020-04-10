## 3. 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

来源：力扣（LeetCode） 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路

用hash 记录 字符:最近出现的下标

遍历字符串

 如果当前字符，在合法字符串中之前出现过，(也就是下标比合法字符串左边界大)，更新合法字符串左边界为这个字符出现位置+1

 更新结果，也就是以当前位置为结尾的最长结果放入结果集

遍历完成，所有位置为结尾的最长长度都计入结果

## JS代码

```javascript
var lengthOfLongestSubstring = function (s) {
    let l = 0, hash = {}, ans = 0
    for (let r = 0; r < s.length; r++) {
        if (s[r] in hash) l = Math.max(l, hash[s[r]] + 1)
        hash[s[r]] = r
        ans = Math.max(ans, r - l + 1)
    }
    return ans
}
```

