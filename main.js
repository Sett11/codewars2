const o=['A','2','3','4','5','6','7','8','9','T','J','Q','K']
const w=['c','d','h','s']
function encode(a){
  return a.map(e=>{
    e=[...e]
    let t=w.indexOf(e[1])
    e=o.indexOf(e[0])
    while(t){e+=13;t--}
    return e
  }).sort((a,b)=>a-b)
}
function decode(a){
  return a.map(e=>{
    let t=1
    while(1){
      if(e/t<13)break
      t++
    }
    return [o[e%13],w[t-1],e]
  }).sort((a,b)=>a[2]-b[2]).map(e=>[e[0],e[1]].join``)
}

console.log(decode([0, 51, 30, 22, 2]))