function anyMatch(head, p) {
  let count = 0,
  curr = head,
  arr = [];
while (curr !== null) {
    arr.push(curr.data);
    curr = curr.next;
    count++;
}
return arr.some(p)
}

function allMatch(head, p) {
  let count = 0,
  curr = head,
  arr = [];
while (curr !== null) {
    arr.push(curr.data);
    curr = curr.next;
    count++;
}
return arr.every(p)
}
console.log(
  countIf(
    {
      data: 1,
      next: { data: 2, next: { data: 3, next: { data: 3, next: null } } },
    },
    el => el >=2
  )
);
