// window[26] 记录窗口内的每个字母出现次数
// hash[26] 记录s1字符串每个字母出现次数
// count 表示s1和s2频率相同的字母数量

var checkInclusion = function (s1, s2) {
  let hash = Array(26).fill(0);
  for (let c of s1) hash[c.charCodeAt() - "a".charCodeAt()]++;

  let window = Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (!hash[i]) count++;
  }

  for (let i = 0; i < s2.length; i++) {
    if (i >= s1.length) {
      let l = s2[i - s1.length].charCodeAt() - "a".charCodeAt();
      if (window[l] === hash[l]) {
        count--;
        window[l]--;
      } else {
        if (--window[l] === hash[l]) count++;
      }
    }

    let r = s2[i].charCodeAt() - "a".charCodeAt();
    if (window[r] === hash[r]) {
      count--;
      window[r]++;
    } else {
      if (++window[r] === hash[r]) count++;
    }
    if (count === 26) return true;
  }
  return false;
};
