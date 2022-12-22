function minimumSteps(numbers, value) {
  numbers = numbers.sort((a, b) => a - b);
  for (let i = 1; i <= numbers.length; i++) {
    if (numbers.slice(0, i).reduce((acc, curr) => acc + curr, 0) >= value)
      return i - 1;
  }
}
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
