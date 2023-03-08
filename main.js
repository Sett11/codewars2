Array.prototype.reverse = function() {
  for(let i=0;i<Math.floor(this.length/2);i++){
    let tmp=this[i]
    this[i]=this[this.length-i-1]
    this[this.length-i-1]=tmp
  }
  return this
}
console.log([1, 2, 3, 4].reverse())