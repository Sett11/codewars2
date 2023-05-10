function combine(...a){
  const c=[...a],r=[]
  for(let i=0;i<Math.max(...c.map(e=>e.length));i++)for(let j=0;j<c.length;j++)if(a[j][i]!==undefined)r.push(a[j][i])
  return r
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]))