function findHack(a) {
  return a.slice().map(e=>{
    if(e[2].length>=5&&e[2].every(u=>u==='A'||u==='B'))e[2].push(20)
    e[2]=e[2].map(u=>u==='A'?30:u==='B'?20:u==='C'?10:u==='D'?5:u===20?20:0).reduce((a,c)=>a+c,0)
    return e
  }).filter(e=>e[1]!==e[2]||e[1]>200).map(e=>e[0])
}