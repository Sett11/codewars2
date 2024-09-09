function split(a,p){
  let r=[[],[]]
  a.forEach(e=>e[p]?r[0].push(e):r[1].push(e))
  return r
}

console.log(split([{p:true},{p:false}],'p'))