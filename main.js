function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function filter(head, p) {
  if(head){
    return p(head.data) ? new Node(head.data, filter(head.next, p)): filter(head.next, p)
  }
  return null
}
console.log(
  filter(
    {
      data: 1,
      next: { data: 2, next: { data: 3, next: { data: 3, next: null } } },
    },
    el => el >=2
  )
);
