function rotateAndRemove(a,r=[]){
  for(let i=a[0].length-1;i>=0;i--){
    let t=[]
    for(let j=0;j<a.length;j++)t.push(a[j][i])
    r.push(t),t=[]
  }
  r=r.map(e=>{
    let m=Math.max(...e),n=Math.min(...e)
    for(let i=0;i<e.length;i++){
      if(e[i]===m){
        e.splice(i,1);break
      }
    }
    for(let i=0;i<e.length;i++){
      if(e[i]===n){
        e.splice(i,1);break
      }
    }
    return e
  })
  return r.length===1?r[0][0]:rotateAndRemove(r,[])
}

console.log(rotateAndRemove([
  [13,25,38,44,52],
  [61,79,82,93,18],
  [24,36,47,52,62],
  [77,85,95,15,25],
  [36,45,53,68,71]
  ]))