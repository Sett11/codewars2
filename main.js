function reverse(n) {
  let counter = 0;
  while (n) {
    counter = counter * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return counter;
}
console.log(reverse(112));
