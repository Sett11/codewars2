class MinHeap{
  constructor(){this.a=[]}
  push=n=>this.a.push(n)
  pop=_=>this.a.splice(this.a.indexOf(Math.min(...this.a)),1)[0]
}

let heap=new MinHeap();
heap.push(4)
heap.push(1)
heap.push(7)
heap.push(9)
heap.push(2)

console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())