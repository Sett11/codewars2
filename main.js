function sortString(s,o,t=[...new Set(o)].map((e,i)=>[e,i]),r='') {
   return [...s].map((e,i,v)=>{
    for(let i=0;i<t.length;i++){
      if(e===t[i][0])e=[e,t[i][1]]
    }
    if(e.length===2)return e
    else r+=e
  }).filter(e=>e).sort((a,b)=>a[1]-b[1]).map(e=>e[0]).join``+r
}
console.log(sortString("banana","abn"))