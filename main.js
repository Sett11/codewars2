function mirror(data) {
  let newArr = data.slice().sort((a, b) => a - b);
  let nextArr = newArr.slice();
  let arr = [];
  arr.push(newArr.pop());
  arr.unshift(newArr);
  nextArr.pop();
  arr.push(nextArr.reverse());
  return arr.flat(1);
}
console.log(mirror([-8, 42, 18, 0, -16]));
