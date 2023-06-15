function cake(a,b){
  let r={'caster sugar':160,'butter':170,'eggs': 3,'self-raising flour':115,'cocoa powder':55},n=r[a]/b
  for(let i in r){
    r[i]=(r[i]/n).toFixed(1)
    if(i==='eggs')r[i]=+r[i]
    else r[i]=+r[i]+'g'
  }
  return r
}

console.log(cake('cocoa powder',100.5))