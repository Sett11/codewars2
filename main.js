function clamp(n,m,a,r){
  if(a===undefined){
    if(n>m)return m
    if(n<0)return 0
    else return n
  }
  if(a!==undefined&&r===undefined){
    if(n<m)return m
    if(n>a)return a
    else return n
  }
  if(a!==undefined&&r!==undefined){
    if(n<m||n>a){
      if(typeof r==='function')return r(n,m,a)
      else return r
    }
    return n
  }
}
console.log(clamp(2,5,10,'ggg'))
console.log(clamp(-5,2,12,function(n,a,b){ return n<a? b : a }))