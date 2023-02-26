class Queue{
  constructor(a=[]){
    this.a=a
  }
}

Queue.prototype.enqueue = function(i) {
  this.a.push(i)
}

Queue.prototype.dequeue = function() {
  return this.a.shift()
}

Queue.prototype.size = function() {
  return this.a.length
}