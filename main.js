Array.prototype.numberOfOccurrences = function(el) {
  const arr = []
  for(let i = 0; i < this.length; i++){
    if(this[i] === el){
      arr.push(this[i])
    }
  }
  return arr.length
}