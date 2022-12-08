function strong(n) {
  const arr = ("" + n).split("").map(Number);
  const factorial = (num) => {
    if (num === 1) {
      return 1;
    }
    let res = 1;
    while (num) {
      res *= num--;
    }
    return res;
  };
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(factorial(arr[i]));
  }
  return arr1.reduce((acc, curr) => acc + curr) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
}
console.log(strong(2));
