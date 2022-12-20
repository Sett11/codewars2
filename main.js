const seven = (m) => {
  let counter = 0;
  while (("" + m).length > 2) {
    counter++;
    m = Math.floor(m / 10) - (m % 10);
  }
  return [m, counter];
};
console.log(seven(1021));
