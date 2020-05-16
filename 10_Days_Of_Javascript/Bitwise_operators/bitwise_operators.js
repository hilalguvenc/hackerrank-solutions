function getMaxLessThanK(n, k) {
  var max = 0;
  for (var b = 2; b <= n; b++) {
    for (var a = 1; a < b; a++) {
      if ((a & b) < k) {
        if ((a & b) > max) {
          max = a & b;
        }
      }
    }
  }
  return max;
}
/*Input
3
5 2
8 5
2 2;
2
9 2
8 3
*/