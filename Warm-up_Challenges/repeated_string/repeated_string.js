function repeatedString(s, n) {
  let count = 0;
  let repeat = Math.floor(n / s.length);
  let remainder = Math.floor(n % s.length);

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a") {
      count++;
    }
  }
  count = repeat * count;
  for (let i = 0; i < remainder; i++) {
    if (s.charAt(i) == "a") {
      count++;
    }
  }
  return count;
}
repeatedString("aba", 10);
repeatedString("a", 1000000000000);
