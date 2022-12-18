function duplicates(array) {
  if (array.length < 2) {
    return 0;
  }
  array.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      arr.push(array[i]);
      arr.push(array[i + 1]);
      array[i] = "&";
      array[i + 1] = "&";
    }
  }
  return arr.length / 2;
}
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
