class Stream{
  constructor(a,b,c,arr=[a]){
    this.a=a
    this.b=b
    this.c=c
    this.arr=arr
    while(this.arr.length<10000)this.arr.push(this.c(this.arr[this.arr.length-1]))
  }
  head(){
    return this.b(this.arr[0])
  }
  tail(){
    return new Stream(this.arr.slice(1)[0],this.b,this.c,this.arr.slice(1))
  }
}

let increment = function(n) {return n + 1}
let id = function(n) {return n}
let sqr = function(n) {return n * n}
let n = new Stream(0, id, increment)

console.log(n.tail().head())