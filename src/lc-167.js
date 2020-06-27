var twoSum = function (numbers, target) {
  let n = numbers.length;
  for (let j = 0, i = n - 1; j < i; j++) {
    while (i > j && numbers[i] + numbers[j] > target) i--;
    if (numbers[i] + numbers[j] == target) return [j + 1, i + 1];
  }
  return [-1, -1];
};
