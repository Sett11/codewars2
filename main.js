function goodName(s,c=[...s.slice(0,s.indexOf('.'))],q=s.slice(s.indexOf('.')),a=[]){
  for(let i=0;i<c.length;i++){
    if(c[i]==='l'){
      c[i]=1
      a.push(c.join``)
      c=[...s.slice(0,s.indexOf('.'))]
    }
    if(c[i]==='o'){
      c[i]=0
      a.push(c.join``)
      c=[...s.slice(0,s.indexOf('.'))]
    }
    if(c[i]===c[i+1]){
      c.splice(i,1)
      a.push(c.join``)
      c=[...s.slice(0,s.indexOf('.'))]
    }
  }
  return [...new Set(a)].sort().map(e=>e+q)
}
console.log(goodName("leetcode.com"))
console.log(goodName("goodlink.com"))
console.log(goodName("microsoft.com"))
console.log(goodName("pex4fun.com"))