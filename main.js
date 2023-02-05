Array.prototype.each = function(fn){
  for(let i = 0; i < this.length; i++){
    if(fn(this[i],i))break
  }
}