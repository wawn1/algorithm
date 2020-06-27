var maxSlidingWindow = function (nums, k) {
  let q = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let l = i - k + 1,
      r = i;
    if (q[0] < l) q.shift();
    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push(i);
    if (i >= k - 1) ans.push(nums[0]);
  }
  return ans;
};
