var removeDuplicates = function (nums) {
  let n = nums.length;
  let s = 1;
  for (let f = 2; f < n; f++) {
    if (nums[f] == nums[s - 1]) continue;
    else {
      nums[++s] = nums[f];
    }
  }
  return s + 1;
};
