Array.prototype.only = function(k){
  return this.filter((e,i)=>k.includes(i))
}