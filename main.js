function lastIndexOf(head, value) {
  let count = 0,
    curr = head,
    arr = [];
  while (head) {
    if (curr !== null) {
      arr.push(curr);
      curr = curr.next;
      count++;
    }
  }
  return arr.lastIndexOf(value);
}
console.log(
  lastIndexOf(
    {
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: 3, next: null } } },
    },
    3
  )
);
