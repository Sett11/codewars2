largestCrossSum=(a,m=[])=>{
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
      let t=a[i].slice(0,j).concat(a[i].slice(j+1)),iAr=[]
      for(let c=0;c<a.length;c++)iAr.push(a[c][j])
      m.push(t.concat(iAr))
    }
  }
  return Math.max(...m.map(e=>e.reduce((a,c)=>a+c,0)))
}

console.log(largestCrossSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]))
console.log(largestCrossSum([
    [ 3, 2, 3 ],
    [ 2, 8, 7 ],
    [ 9, 3, 5 ],
    [ 1, 5, 7 ] ]))