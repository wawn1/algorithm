var findDuplicate = function (nums) {
  let fast = nums[0],
    slow = nums[0];
  while (true) {
    // 一定存在环，不用判断空
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (slow == fast) break;
  }

  fast = nums[0];
  while (fast != slow) {
    fast = nums[0];
    slow = nums[0];
  }
  return fast;
};
