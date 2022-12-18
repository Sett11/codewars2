function nextHappyYear(year) {
  let counter = 0;
  for (let i = year; i < year + 200; i++) {
    const arr = ("" + i).split("").map(Number);
    const set = [...new Set(arr)];
    if (arr.length === set.length) {
      counter = i;
      break;
    }
  }
  return counter;
}
console.log(nextHappyYear(1123));
