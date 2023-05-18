function solveTTT(b,a=[],d=[],x=2){
  b=b.map((e,i)=>[e,i])
  for(let i=0;i<b.length;i+=3)a.push(b.slice(i,i+3))
  let c=a[0].map((e,i)=>a.map((u,j,v)=>u[i]))
  while(x){
    let t=[]
    for(let i=0;i<a.length;i++)t.push(a[i][i])
    d.push(t),a=a.map(e=>e.reverse()),x--
  }
  let r=(a.concat(c).concat(d)).filter(e=>e.flat().filter(u=>u==='X').length===2&&!e.flat().includes('O'))
  if(r.length){
    return r.flat().filter(e=>!e[0])[0][1]
  }
  return a.flat().find(e=>!e[0])[1]
}

console.log(solveTTT(['X', 'X', 'O', 'O', 'X', '', '', '', '']))
console.log(solveTTT(['', '', '', 'O', '', '', 'X', '', '']))