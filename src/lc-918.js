var maxSubarraySumCircular = function (A) {
  let n = A.length;
  A = A.concat(A);

  let sum = Array(2 * n + 1).fill(0);
  for (let i = 1; i <= 2 * n; i++) sum[i] = sum[i - 1] + A[i - 1];

  let ans = -Number.MAX_VALUE;
  let q = [];
  for (let i = 1; i <= 2 * n; i++) {
    let l = i - n,
      r = i;
    if (q[0] < l) q.shift();

    if (ans < sum[i] - sum[q[0]]) ans = sum[i] - sum[q[0]];

    while (q.length && sum[q[q.length - 1]] >= sum[i]) q.pop();
    q.push(i);
  }
  return ans;
};
