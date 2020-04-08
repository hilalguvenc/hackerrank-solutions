function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i] == 0) {
      i = i + 1;
      jumps++;
    } else {
      jumps++;
    }
  }
  return jumps;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
