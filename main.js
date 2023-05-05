function findSuperMan(c,s='superman',f=x=>x.replace(/[^superman]/g,'')){
  const r=c.toLowerCase().split` `.filter(e=>!e.match(s)&&![...s].some((u,i,v)=>e.match(u+v[i+1]))&&![...s].reverse().some((u,i,v)=>e.match(u+v[i+1]))).join` `
  return f(r).match(s)||f(r).match([...s].reverse().join``)?'Hi, SuperMan!':'Are you crazy?'
}


console.log(findSuperMan('jfc szzw qudzgh pz geddxyrq mqlvgc ya oddn'))