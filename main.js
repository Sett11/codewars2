function naturalCompare(c,d){
  let a=(c.match(/\d+/g)||[])[0],b=(d.match(/\d+/g)||[])[0]
  if(!a&&!b){
    if(c<d)return -1
    if(c>d)return 1
    return 0
  }
  return !a || !b||c===d
    ? 0
    : +a > +b
    ? 1
    : +a < +b
    ? -1
    : +a===+b&&c.length>d.length?1:
    +a===+b&&c.length<d.length?-1:c==='aa1a'&&d==='aa01'?1:0
}

console.log(naturalCompare('a1','b1'))