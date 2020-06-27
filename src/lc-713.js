var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let n = nums.length;
  let res = 0;

  let multi = 1;
  for (let r = 0, l = 0; r < n; r++) {
    multi *= nums[r];
    while (multi >= k) {
      multi /= nums[l];
      l++;
    }
    res += r - l + 1;
  }
  return res;
};
