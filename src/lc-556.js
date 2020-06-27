var nextGreaterElement = function (n) {
  let nums = (n + "").split("").map((value) => int(value));
  let n = nums.length;
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  let j = i + 1;
  while (j < n && nums[i] < nums[j]) j++;
  j--;

  if (i >= j) return -1;
  function swap(i, j) {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  swap(i, j);

  function reverse(i, j) {
    while (i < j) {
      swap(i, j);
      i++;
      j--;
    }
  }
  reverse(i + 1, n - 1);
  let res = int(nums.join(""));
  return res > Math.pow(2, 31) ? -1 : res;
};
