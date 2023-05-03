isValid=(m,n,a=[])=>{
  const s=x=>x.reduce((a,c)=>a+c,0)
  const f=x=>{
    let r=[],w=[],z=[],c=2
    for(let i=0;i<x[0].length;i++){
      iAr=[]
      for(let j=0;j<x.length;j++)iAr.push(x[j][i])
      r.push(iAr),iAr=[]
    }
    while(c){
      for(let i=0;i<x.length;i++)for(let j=0;j<x[i].length;j++)if(i===j)w.push(x[i][j])
      z.push(w),w=[],x=x.map(e=>e.reverse()),c--
    }
    return r.concat(z)
  }
  m.flat().sort((a,b)=>a-b).forEach((e,i,v)=>a.push(v[i+1]-e))
  return a.slice(0,-1).every(e=>e===n)&&f(m).concat(m).every((e,i,v)=>s(e)===s(v[0]))
}

console.log(isValid([
                    [22, 1, 16],
                    [7, 13, 19],
                    [10, 25, 4],
                ],
                3))