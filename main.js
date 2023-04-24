function solution(a){
  a=a.map(e=>[e[0],e[e.length-1]].join``).sort()
  const f=x=>{
    let t=x.shift()
    while(x.length){
      for(let i=0;i<=x.length;i++){
        if(i===x.length)return t
        if(x[i][0]===t[t.length-1]){
          t+=x.splice(i,1)[0]
          break
        }
      }
    }
    return t
  }
  z=a.map((e,i,v)=>(v.slice(i)+' '+v.slice(0,i)).replace(/ /g,',').split`,`)
  return z.map(e=>f(e)).some(e=>e.length===a.join``.length)
}

console.log(solution(["east", "e", "e", "t", "t", "e", "time"]))