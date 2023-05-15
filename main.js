const makeChange=n=>{
  const o={'H':50,'Q':25,'D':10,'N':5,'P':1},r={}
  for(let i in o){
    r[i]=0
    while(n>=o[i]){
      n-=o[i]
      r[i]++
    }
    if(!r[i])delete r[i]
  }
  return r
}

console.log(makeChange(43))