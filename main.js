function max(a){
  if(!a.length)return -Infinity
  const b=[],r=a.pop()
  if(a.every(e=>r>e)&&b.every(e=>r>e))return r
  return max(a)
 }
 console.log(max([99,2,100,4,5]))