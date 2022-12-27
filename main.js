function elevatorDistance(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(Math.abs(array[i] - array[i + 1]));
  }
  return arr.filter((el) => el).reduce((acc, curr) => acc + curr, 0);
}
console.log(elevatorDistance([7, 1, 7, 1]));
