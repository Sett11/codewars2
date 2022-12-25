function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function reduce(head, f, init) {
  let count = 0, arr = [], tmp = head
  while(tmp !== null){
    arr.push(tmp.data)
    tmp = tmp.next
    count++
  }
  return arr.reduce(f,init)
}
console.log(
  reduce(
    {
      data: 1,
      next: { data: 2, next: { data: 3, next: { data: 3, next: null } } },
    },
    (a,b) => a + b, 0
  )
);
