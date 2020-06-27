var numSubarrayBoundedMax = function (A, L, R) {
  function count(x) {
    let res = 0,
      len = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= x) {
        len++;
        res += len;
      } else len = 0;
    }
    return res;
  }

  return count(R) - count(L - 1);
};
