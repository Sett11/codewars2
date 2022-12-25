function length(head) {
  let tmp = head;
  const arr = [];
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  return arr.length;
}
console.log(
  length({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
);
