function one(arr, fun) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fun(arr[i]));
  }
  return res.filter((el) => el !== false).length === 1 ? true : false;
}
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item < 2;
  })
);
