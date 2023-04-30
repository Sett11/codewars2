function sc(c,a){
  s=c.match(/(.)\1*/g).map(e=>[e[0],e.length])
  a.forEach(e=>{
    v=s.reduce((a,c)=>c[0]!=e||a[1]<=c[1]?a:c, [e,NaN])
    v[1]++
    if(!v[1])s.push([e,1])
  })
  return s.map(([e,i])=>e.repeat(i)).join``
}

console.log(sc('ab',[ 'c' ]))
console.log(sc("x",["x","x","x"]))
console.log(sc("abababab",["a","a","a","a","b","b","b","b"]))
console.log(sc('mmilllccckkkiiiqqwwttllllllpppcccccccccpppppppppxxvss'  ,['i','i','p','m','i','k','c','i']))