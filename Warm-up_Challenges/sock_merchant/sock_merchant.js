function sockMerchant(n, ar) {
  let array = ar.sort((a, b) => a - b);
  let pairCount = 0;
  for (let i = 0; i < n - 1; i++) {
    if (array[i] == array[i + 1]) {
      pairCount++;
      i += 1;
    }
  }
  return pairCount;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
