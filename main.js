function toCurrency(p){
    p = String(p).split``
    if(p.length===7){
        return `${p[0]},${p[1]}${p[2]}${p[3]},${p[4]}${p[5]}${p[6]}`
    }
    if(p.length===5){
      return `${p[0]}${p[1]},${p[2]}${p[3]}${p[4]}`
    }
    if(p.length===4){
      return `${p[0]},${p[1]}${p[2]}${p[3]}`
    }
    const arr = []
    for(let i = 0; i < p.length; i+=3){
      arr.push(p.slice(i,i+3))
    }
    return arr.map(el=>el.join``).join`,`
  }
  console.log(toCurrency(12))