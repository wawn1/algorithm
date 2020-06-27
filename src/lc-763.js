var partitionLabels = function (S) {
  let n = S.length;

  let hash = {};
  for (let i = 0; i < n; i++) hash[S[i]] = i;

  let res = [],
    l = 0,
    r = 0;
  for (let p = 0; p < n; p++) {
    r = Math.max(r, hash[S[p]]);
    if (p == r) {
      res.push(r - l + 1);
      l = r + 1;
    }
  }
  return res;
};
