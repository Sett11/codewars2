class Counter{
  constructor(){
    this.counter=0
  }
  incr(){this.counter++}
  valueOf(){return this.counter}
}

c=new Counter()
c.incr()
console.log(c+1)