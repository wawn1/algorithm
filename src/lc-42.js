//   左边如果比右边高，右边往前走，填入水，直到比左边高
// 然后从左边走，填入水，直到比右边高。相遇停止
var trap = function (height) {
  let n = height.length;
  let left = 0,
    right = n - 1;
  let ans = 0;
  let left_max = 0,
    right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max ? (left_max = height[left]) : (ans += left_max - height[left]);
      left++;
    } else {
      height[right] >= right_max ? (right_max = height[right]) : (ans += right_max - height[right]);
      right--;
    }
  }
  return ans;
};
