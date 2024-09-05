function makingString(a) {
  let r=0,u=new Set()
  while(a.length){
    let m=Math.max(...a),i=a.indexOf(m)
    a.splice(i,1)
    while(u.has(m))m--
    if(m>-1)r+=m
    u.add(m)
  }
  return r
}

console.log(makingString([5,5,5]))