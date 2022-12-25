function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function map(head, f) {
  if(head){
    return new Node(f(head.data), map(head.next, f))
  }
  return null
}
console.log(
  map(
    {
      data: 1,
      next: { data: 2, next: { data: 3, next: { data: 3, next: null } } },
    },
    el => el * 2
  )
);
