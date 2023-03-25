Array.range = function(s,c,a=[]) {
  while(a.length<c){a.push(s);s++}return a
}
Array.prototype.sum = function() {
  return this.reduce((a,c)=>a+c,0)
}

console.log(Array.range(-1,4).sum())