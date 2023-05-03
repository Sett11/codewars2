Array.prototype.mapMany=function(fn){
  const f=x=>{
    x=x.reduce((a,c)=>Array.isArray(c)?a.concat(c):a.concat([c]),[])
    if(x.some(e=>Array.isArray(e)))return f(x)
    return x
  }
  return f(this.slice().map(fn))
}

  console.log((['1', 2, 3, [4, ['4', 5, '5', [6]], 7, [8], 'abc']].mapMany(num => num)))