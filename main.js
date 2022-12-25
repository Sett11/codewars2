function indexOf(head, value) {
  let count = 0;
  while (head) {
    if (head.data === value) return count;
    head = head.next;
    count++;
  }
  return -1;
}
console.log(
  indexOf(
    {
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: 3, next: null } } },
    },
    3
  )
);
