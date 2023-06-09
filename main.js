Number.prototype.twos=function(n){
  const s=this>0?'0':'1'
  return (this).toString(2).replace(/\-/,'').padStart(n,s)
}

console.log((1).twos(3))