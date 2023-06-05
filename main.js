function encipher(q,k,s=q,f=x=>x.join``.toUpperCase(),w=[...q].map((e,i)=>e===' '?i:'').filter(e=>e!=='')){
  let a=[...new Set((k+'abcdefghijklmnopqrstuvwxyz').toLowerCase().replace(/[^a-z]/g,''))]
  a=a.indexOf('i')<a.indexOf('j')?a.filter(e=>e!=='j'):a.filter(e=>e!=='i')
  s=a.includes('i')?s.replace(/j/gi,'i'):s.replace(/i/gi,'j')
  a=a.join``.match(/.{5,5}/g).map(e=>[...e])
  let b=a[0].map((_,i)=>a.map(u=>u[i]))
  s=s.toLowerCase().replace(/[^a-z]/g,'').replace(/(.)\1*/g,e=>e.length>1?[...e].join`x`:e)
  s=s.length%2?s+'x':s
  s=s.match(/.{2,2}/g).map(e=>{
    e=[...e]
    for(let i=-1;++i<a.length;){
      if(e.every(u=>a[i].includes(u))){
        e[0]=a[i][(a[i].indexOf(e[0])+1)%a[i].length],e[1]=a[i][(a[i].indexOf(e[1])+1)%a[i].length]
        return f(e)
      }
      if(e.every(u=>b[i].includes(u))){
        e[0]=b[i][(b[i].indexOf(e[0])+1)%b[i].length],e[1]=b[i][(b[i].indexOf(e[1])+1)%b[i].length]
        return f(e)
      }
    }
    return f([a[a.findIndex(u=>u.includes(e[0]))][b.findIndex(u=>u.includes(e[1]))],a[a.findIndex(u=>u.includes(e[1]))][b.findIndex(u=>u.includes(e[0]))]])
  }).join``.split``
  for(let i=-1;++i<w.length;)s.splice(w[i],0,' ')
  return s.join``
}

console.log(encipher('jEMWyT Et  JuoIQewnCcKmRXp yOmxQ qqkg UCwNwC uS ypqOMI','UQQ f q  SWL LhWgU KxrHSnJR I IeXhm  jMQz i pb kg v  Azqvv  ARIJRAEsS YiQI  Nl Hna  nVaDqVpRhem Zfn QHT Od  m J  n kMc  y   rd wT'))