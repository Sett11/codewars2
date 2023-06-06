const f=x=>x.toLowerCase()
const r=([x,y])=>y?x:x.toUpperCase()
const z=x=>{
  let a='abcdefghijklmnopqrstuvwxyz'
  for(let i=x.length;--i>=0;)if(a.includes(x[i]))return i
}
const w1=x=>{
  return x.map(e=>{
    if(+e===+e)return e
    e=[...e].map(u=>[f(u),u>{}])
    for(let i=-1;++i<e.length;){
      if(e[i][0]==='c'&&(e[i+1]||[])[0]==='i')e[i][0]='s'
      if(e[i][0]==='c'&&(e[i+1]||[])[0]==='e')e[i][0]='s'
      if(e[i][0]==='c'&&(e[i+1]||[])[0]!=='h')e[i][0]='k'
    }
    return e.map(u=>r(u)).join``
  })
}
const w2=x=>{
  return x.map(e=>{
    if(+e===+e)return e
    e=[...e].map(u=>[f(u),u>{}])
    for(let i=-1;++i<e.length;){
      if(e[i][0]==='p'&&(e[i+1]||[])[0]==='h')e[i][0]='f',e.splice(i+1,1),i--
    }
    return e.map(u=>r(u)).join``
  })
} 
const w3=x=>{
  return x.map(e=>{
    if(+e===+e)return e
    e=[...e].map(u=>[f(u),u>{}])
    for(let i=-1;++i<e.length;){
      let t=parseInt(e[i][0],36)-10
      if(t>-1&&t<27&&t===t&&e[i][0]===(e[i+1]||[])[0])e.splice(i+1,1),i--
    }
    if(e.length!==1&&e.length>3){
      e=e.map(u=>r(u)).join``
      let t=z(e)
      while(e[t]==='e')e=e.slice(0,t)+e.slice(t+1)
      return e.replace(/e-/,'-')
    }
    return e.map(u=>r(u)).join``
  })
}
const w4=x=>{
  return x.map(e=>{
    if(+e===+e)return e
    e=[...e].map(u=>[f(u),u>{}])
    for(let i=-1;++i<e.length;){
      if((e[i]||[])[0]==='t'&&(e[i+1]||[])[0]==='h')e[i][0]='z',e.splice(i+1,1),i--
      if((e[i]||[])[0]==='w'&&(e[i+1]||[])[0]==='r')e[i][0]='r',e.splice(i+1,1),i--
      if((e[i]||[])[0]==='w'&&(e[i+1]||[])[0]==='h')e[i][0]='v',e.splice(i+1,1),i--
      else if((e[i]||[])[0]==='w')e[i][0]='v'
    }
    return e.map(u=>r(u)).join``
  })
}
const w5=x=>{
  return x.map(e=>{
    if(+e===+e)return e
    e=[...e].map(u=>[f(u),u>{}])
    for(let i=-1;++i<e.length;){
      if((e[i]||[])[0]==='o'&&(e[i+1]||[])[0]==='u')e[i][0]='u',e.splice(i+1,1),i--
      if((e[i]||[])[0]==='a'&&(e[i+1]||[])[0]==='n')e[i][0]='u'
      if(!i&&e[i][0]==='s'&&(e[i+1]||[])[0]==='m')e=[['s',e[i][1]],['c',e[i+1][1]],['h',1],['m',1]].concat(e.slice(2))
      if(i===e.length-3&&e[i][0]==='i'&&e[i+1][0]==='n'&&e[i+2][0]==='g')e[i+2][0]='k'
    }
    return e.map(u=>r(u)).join``
  })
}

siegfried=(w,s)=>{
  s=s.split` `
  if(w===1)return w1(s).join` `
  if(w===2)return w2(w1(s)).join` `
  if(w===3)return w3(w2(w1(s))).join` `
  if(w===4)return w4(w3(w2(w1(s)))).join` `
  if(w===5)return w5(w4(w3(w2(w1(s))))).join` `
}

console.log(siegfried(3,"\
This is KAOS!! We don't play with Code-Wars here!! \
So there will be trouble for you this time Mr Maxwell Smart! \
We have received all the photographic evidence we need so choose carefully what you say next! \
I hope you will co-operate with KAOS and do exactly what we want Mr Smart otherwise I won't be happy with you! \
In fact, if you misbehave that would make me very unhappy indeed... \
A"))