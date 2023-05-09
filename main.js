f=x=>{
  for(let i=0;i<x.length;i++)x[i][i]='&'
  return x.map(e=>e.slice(0,e.indexOf('&'))).filter(e=>e.length)
}
upperTriangular=(m,q=f(m))=>q.every(e=>e.every(u=>!u))
lowerTriangular=(m,q=f(m.map(e=>e.reverse()).reverse()))=>q.every(e=>e.every(u=>!u))

console.log(upperTriangular([
  [1,1,1],
  [0,1,1],
  [0,0,1]]))
console.log(lowerTriangular([
  [1,0,0],
  [1,1,0],
  [1,1,1]]))