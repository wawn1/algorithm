function swap(i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}
var sortColors = function (nums) {
  let i = 0,
    j = 0,
    k = nums.length - 1;
  while (j <= k) {
    let c = nums[j];
    if (c == 0) {
      swap(i, j);
      i++;
      j++;
    } else if (c == 1) {
      j++;
    } else {
      swap(j, k);
      k--;
    }
  }
};
