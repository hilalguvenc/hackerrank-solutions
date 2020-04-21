function modifyArray(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArray.push(nums[i] * 2);
    }
    if (nums[i] % 2 === 1) {
      newArray.push(nums[i] * 3);
    }
  }
  return newArray;
}
modifyArray([1, 2, 3, 4, 5]);
