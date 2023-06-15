function segmentSumsMatrix(a){
  return Array(a.length).fill(Array(a.length).fill(0)).map((e,i)=>e.map((u,j)=>a.slice(Math.min(i,j),Math.max(i,j)+1).reduce((a,c)=>a+c,0)))
}

console.log(segmentSumsMatrix([1,2,3]))