Array.prototype.remove = function(i) {
  if(typeof i!=='number'||i<0||i>this.length-1)return this
  this.splice(i,1)
  return this
}