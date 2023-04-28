function graph(a){
  if(!a.length)return ''
  if(a.length===1&&!a[0])return " ____  ^ 0"
  let r=Array(Math.max(...a)+1).fill(1).map((_,i)=>i+'').map((e,i,v)=>!i?'& '+e:i!==v.length-1&&i?'& '+e+'\n':'^ '+e+'\n').map(e=>'......'.repeat(a.length)+' '+e).reverse()
  r=r.map((e,i)=>{
    let d=+e.replace(/\D/g,'')
    x=a.map((u,j)=>d===u?j+1:0).filter(z=>z)
    if(!a.includes(d))return [...e]
    else{
        let s=' ____ '
        for(let i=0;i<x.length;i++){
          let t=6*(x[i])
          e=e.slice(0,t-6)+s+e.slice(t)
        }
      return [...e]
    }
  })
  let c=0
  while(c<r.length){
    for(let i=0;i<r[c].length;i++){
      if(r[c][i]===' '&&r[c][i+1]==='_'||r[c][i]===' '&&r[c][i-1]==='_'){
        for(let j=c+1;j<r.length;j++){
          r[j][i]='|'
        }
      }
    }
    c++
  }
  return r.map(e=>{
    e=e.join``
    for(let i=0;i<e.length;i++){
      if(e[i]==='|'&&e[i+5]==='|'){
        e=e.slice(0,i)+e.slice(i,i+5).replace(/\./g,' ')+e.slice(i+5)
      }
    }
    return e.replace(/\&/,'|')
  }).join``
}

console.log(graph([1,3,5,4,1]))