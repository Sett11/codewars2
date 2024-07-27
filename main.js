function findCenterPoints(m){
  let a=m.split`\n`.map(e=>e.split` `),r=[],c=Infinity
  a.forEach((e,i)=>e.forEach((u,j)=>u!=='.'?r.push([i,j]):0))
  let n=r.length
  for (let i=-1;++i<n;){
    let s=0
    for(let j=-1;++j<n;){
      s+=(Math.abs(r[i][0]-r[j][0])**2+Math.abs(r[i][1]-r[j][1])**2)**.5
    }
    s=s.toFixed(6)
    c=Math.min(c,s)
    r[i].push(s)
  }
  return r.filter(e=>e[2]==c).map(e=>a[e[0]][e[1]]).sort()
}

console.log(findCenterPoints(`. . . . . . . . . . .
. I . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. . E . . . . . . . .
. . . . . . . . . . .
. . . G F . . . . . .
. . . . A . . . . . .
. . . . . D . . . . .
H . . . . . . . C . B
. . . . . . . . . . .
. . . . . . . . . . .`))
console.log(findCenterPoints(`A . . . . B
. . . . . .
. . . F . .
. . E . . .
. . . . . .
D . . . . C`))