function zipObject(k,v=[]) { 
  if(!k)return {}
  const obj={}
  if(k.every(e=>typeof e==='string')){
    k.forEach((e,i)=>obj[e]=v[i])
    return obj
  }
  if(!v.length&&k.every(e=>typeof e==='object')){
   k.map(e=>obj[[e][0][0]]=e[1])
   return obj
  }
}
console.log(zipObject(['fred', 'barney'], [30, 40]))
console.log(zipObject([['fred', 30], ['barney', 40]]))
console.log(zipObject([['fred'], ['barney']]))
console.log(zipObject())