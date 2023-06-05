class Node {
  next;  
  constructor(item) {
    this.data = item;
    this.next = null;
  }
  toString() {
    if (!this.data) return "";
    let str = this.data;
    let n = this.next;
    while (n != null) {
      str += " -> " + n.data;
      n = n.next;
    }
    return str;
  }
  static build(values) { 
    if (!values || !values.length) return null;
    let head, tail
    
    if (values.length) head = tail = new Node(values[0]);
    
    for (let i = 1; i < values.length; i++) {
      tail.next = new Node(values[i]);
      tail = tail.next;
    }
    return head;
  }
}

function searchKFromEnd(l,k,a=[]){
  while(l&&l.data){
    a.push(l.data)
    l=l.next
  }
  return k>a.length?null:a[a.length-k]
}

console.log(searchKFromEnd(Node.build([5,2,3,1]),3))