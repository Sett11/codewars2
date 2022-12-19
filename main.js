function sumOfN(n) {
  if (n > 0) {
    if (n === 1) {
      return [0, 1];
    }
    const arr = [];
    const newArr = [];
    for (let i = 0; i < n + 5; i++) {
      arr.push(i);
      newArr.push(arr.reduce((acc, curr) => acc + curr, 0));
    }
    newArr.length = n + 1;
    return newArr;
  }
  if (n === 0) {
    return [0];
  }
  if (n < 0) {
    if (n === -1) {
      return [0, -1];
    }
    const arr = [];
    const newArr = [];
    for (let i = 0; i > n - 5; i--) {
      arr.push(i);
      newArr.push(arr.reduce((acc, curr) => acc + curr, 0));
    }
    newArr.length = Math.abs(n) + 1;
    return newArr;
  }
}
console.log(sumOfN(-5));
