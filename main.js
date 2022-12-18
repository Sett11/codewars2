function solution(value) {
  const arr = [0, 0, 0, 0, 0];
  const nextArr = arr.slice();
  value = value.toString();
  for (let i = 0; i < value.length; i++) {
    if (value) {
      nextArr.push(value);
      break;
    }
  }
  let total = value.length;
  while (total) {
    nextArr.shift();
    total--;
  }
  return `Value is ${nextArr.join("")}`;
}
console.log(solution(1109));
