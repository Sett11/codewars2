const f=(w,c,r=[])=>{
  [n,m]=[w.length,w[0].length]
  while(c){
    for(let i=0;i<n;i++){
      let c=i,inArr=[],j=0
      while(j<m&&c>=0){
        inArr.push(w[c][j])
        c-=1
        j+=1
      }
      r.push(inArr.reverse())
      inArr=[]
    }
    c--
    w=w.map(e=>e.reverse()).reverse()
  }
  r.pop()
  return r
}
function validateBattlefield(a){
  const o=f(a,2),d=f(a.map(e=>e.reverse()),2)
  for(let i=0;i<o.length;i++){
    for(let j=1;j<o[i].length;j++){
      if(o[i][j]&&o[i][j-1]||d[i][j]&&d[i][j-1])return false
    }
  }
  a=a.map((e,i)=>e.map((u,j)=>u?[i,j]:u).filter(z=>z)).filter(e=>e.length).flat()
  b=[]
  for(let i=0;i<a.length;i++){
    let iAr=[a[i]]
    let t=a[i]
    for(let j=i+1;j<a.length;j++){
      if(t[0]===a[j][0]&&Math.abs(t[1]-a[j][1])===1||t[1]===a[j][1]&&Math.abs(t[0]-a[j][0])===1){
        iAr.push(a[j])
        t=a[j]
      }
    }
    if(iAr.length===4)b.push(...iAr)
    iAr=[]
  }
  if(b.length!==4)return false
  b=b.map(e=>e.join``)
  a=a.filter(e=>!b.includes(e.join``))
  b=[]
  for(let i=0;i<a.length;i++){
    let iAr=[a[i]]
    let t=a[i]
    for(let j=i+1;j<a.length;j++){
      if(t[0]===a[j][0]&&Math.abs(t[1]-a[j][1])===1||t[1]===a[j][1]&&Math.abs(t[0]-a[j][0])===1){
        iAr.push(a[j])
        t=a[j]
      }
    }
    if(iAr.length===3)b.push(...iAr)
    iAr=[]
  }
  if(b.length!==6)return false
  b=b.map(e=>e.join``)
  a=a.filter(e=>!b.includes(e.join``))
  b=[]
  for(let i=0;i<a.length;i++){
    let iAr=[a[i]]
    let t=a[i]
    for(let j=i+1;j<a.length;j++){
      if(t[0]===a[j][0]&&Math.abs(t[1]-a[j][1])===1||t[1]===a[j][1]&&Math.abs(t[0]-a[j][0])===1){
        iAr.push(a[j])
        t=a[j]
      }
    }
    if(iAr.length===2)b.push(...iAr)
    iAr=[]
  }
  if(b.length!==6)return false
  b=b.map(e=>e.join``)
  a=a.filter(e=>!b.includes(e.join``))
  b=[]
  return a.length===4
}

console.log(validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]))