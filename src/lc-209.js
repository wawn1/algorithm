var minSubArrayLen = function (s, nums) {
  let n = nums.length;
  let sum = 0;
  let ans = Number.MAX_VALUE;
  for (let i = 0, j = 0; i < n; i++) {
    sum += nums[i];
    if (sum < s) continue;
    while (sum - nums[j] >= s) sum -= nums[j++];
    ans = Math.min(ans, i - j + 1);
  }
  if (ans == Number.MAX_VALUE) return 0;
  return ans;
};
