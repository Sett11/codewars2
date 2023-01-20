function numberFormat(p){
    p = String(p).split``
    let M = ''
    if(p[0]==='-'){
        M = p.shift()
    }
    if(p.length===8){
        return M + `${p[0]}${p[1]},${p[2]}${p[3]}${p[4]},${p[5]}${p[6]}${p[7]}`
    }
    if(p.length===7){
        return M + `${p[0]},${p[1]}${p[2]}${p[3]},${p[4]}${p[5]}${p[6]}`
    }
    if(p.length===5){
      return M + `${p[0]}${p[1]},${p[2]}${p[3]}${p[4]}`
    }
    if(p.length===4){
      return M + `${p[0]},${p[1]}${p[2]}${p[3]}`
    }
    const arr = []
    for(let i = 0; i < p.length; i+=3){
      arr.push(p.slice(i,i+3))
    }
    return M + arr.map(el=>el.join``).join`,`
  }
  console.log(numberFormat(-567854655))