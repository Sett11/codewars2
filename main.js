class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(l){
  const f=x=>{
    if(x){
      y=x.next
      return [x.data].concat(y?f(y):[])
    }
    return []
  }
  r=f(l)
  return r.length?r.join` -> `+' -> null':'null'
}

console.log(stringify(new Node(1, new Node(2, new Node(3)))))