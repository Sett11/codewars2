sc=(a,n,r=[])=>{
  if(!n)return a
  a.forEach((e,i)=>e.forEach((u,j)=>u==='V'?r.push([i,j]):0))
  r=r.map(e=>[e,[e[0]+1,e[1]],[e[0],e[1]+1],[e[0]-1,e[1]],[e[0],e[1]-1]]).flat().filter(e=>e[0]>=0&&e[1]>=0&&e[0]<a.length&&e[1]<a[0].length)
  for(let i=0;i<r.length;i++){
    a[r[i][0]][r[i][1]]='V'
  }
  return sc(a,n-1)
}

console.log(sc([
  ["A","A","A","A","A"],
  ["V","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
  ],2))