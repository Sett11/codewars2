function arrayLeaders(numbers) {
  const arr = [];
  while (numbers.length) {
    let num = numbers.shift();
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    if (num > sum) {
      arr.push(num);
    }
    numbers.length - 1;
  }
  return arr;
}
console.log(arrayLeaders([-1, -29, -26, -2]));
