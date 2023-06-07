function pascal(d,a=[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]){
  if(d<a.length)return a.slice(0,d)
  if(a.length===d)return a
  let t=[1]
  for(let i=-1;++i<a[a.length-1].length;)t.push((a[a.length-1][i]+a[a.length-1][i+1])||1)
  a.push(t)
  return pascal(d,a)
}
function diagonal(n,p,a=pascal(n+1).slice(p)){
  return eval(a[0].map(_=>a.map(u=>u[p]))[0].join`+`)
}

console.log(diagonal(100,10))
// [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ],
//   [1, 6, 15, 20,15, 6,  1],
//   [1,  7, 21, 35,35, 21,  7,  1]
// ]