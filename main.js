Array.prototype.map=function(f){
  const a=[]
  for(let i=0;i<this.length;i++){
    a.push(f(this[i]))
  }
  return a
}