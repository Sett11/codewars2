function listToArray(list) {
  const arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  return arr;
}
console.log(
  listToArray({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
);
