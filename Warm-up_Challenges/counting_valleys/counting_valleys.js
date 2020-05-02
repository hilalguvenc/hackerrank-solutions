function countingValleys(n, s) {
  let countValley = 0;
  let seaLevel = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (seaLevel == 0 && s[i] == "D") {
      countValley++;
    }
    if (s[i] == "D") {
      seaLevel--;
    }
    if (s[i] == "U") {
      seaLevel++;
    }
  }
  return countValley;
}
console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));
