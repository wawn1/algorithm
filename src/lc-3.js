var lengthOfLongestSubstring = function (s) {
  let start = -1;
  let hash = {};
  let ans = 0;
  for (let end = 0; end < s.length; end++) {
    // 不要写hash[s[end]], 如果hash[s[end]]===0
    if (s[end] in hash) {
      start = Math.max(start, hash[s[end]]);
    }
    ans = Math.max(ans, end - start);
    hash[s[end]] = end;
  }
  return ans;
};
