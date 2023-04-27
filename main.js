const IterativeRotationCipher={};

IterativeRotationCipher.encode=function(n,s){
  const f=(n,s,v=n)=>{
    if(!v)return n+' '+s
    sp=[...s].map((e,i)=>e===' '?i:'').filter(e=>e)
    s=s.replace(/ /g,'')
    s=s.slice(-(n%s.length))+s.slice(0,-(n%s.length))
    for(let i=0;i<sp.length;i++)s=s.slice(0,sp[i])+' '+s.slice(sp[i])
    return f(n,s.split` `.map(e=>e.slice(-(n%e.length))+e.slice(0,-(n%e.length))).join` `,v-1)
  }
  return f(n,s)
}

IterativeRotationCipher.decode=function(s){
  n=0
  s=s.replace(/^\d+ /,e=>n=+e).replace(n,'')
  const f=(n,s,v=n)=>{
    if(!v)return s
    s=s.split` `.map(e=>e.slice(n%e.length)+e.slice(0,n%e.length)).join` `
    sp=[...s].map((e,i)=>e===' '?i:'').filter(e=>e)
    s=s.replace(/ /g,'')
    s=s.slice(n%s.length)+s.slice(0,n%s.length)
    for(let i=0;i<sp.length;i++)s=s.slice(0,sp[i])+' '+s.slice(sp[i])
    return f(n,s,v-1)
  }
  return f(n,s)
}

console.log(IterativeRotationCipher.encode(14,`True evil is a mundane bureaucracy.`))
console.log(IterativeRotationCipher.decode('14 daue ilev is a munbune Traurecracy.'))