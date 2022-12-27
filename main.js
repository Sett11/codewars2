function oddOnesOut(nums) {
  const res = Object.entries(
    nums.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {})
  )
    .filter((el) => el[1] % 2 !== 0)
    .map((el) => Number(el[0]));
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (nums[i] === res[j]) {
        nums[i] = "&";
      }
    }
  }
  return nums.filter((el) => el !== "&");
}
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]));
