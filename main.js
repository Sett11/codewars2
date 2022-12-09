function numPrimorial(n) {
  let arr = [];
  let x = 1;
  while (x < 10000) {
    arr.push(x);
    x++;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        arr[i] = null;
      } else {
        arr[i] = arr[i];
      }
    }
  }
  const newArr = arr.filter((el) => el !== null && el !== 1);
  const nextArr = newArr.slice(0, n);
  return nextArr.reduce((acc, curr) => acc * curr);
}
console.log(numPrimorial(3));
