function save(sizes, hd) {
  let sum = 0;
  for (let i = 0; i < sizes.length; i++) {
    sum += sizes[i];
    if (sum > hd) {
      sum = i;
      break
    }
    if (i === sizes.length-1) {
      sum = sizes.length;
      break
    }
  }
  return sum;
}
console.log(save([4, 8, 15, 16, 23, 42], 108));
