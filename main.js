function selReverse(a, l) {
  if(l<2)return a
  if(l>a.length)return a.reverse()
  const arr=[]
  for(let i=0;i<a.length;i+=l){arr.push(a.slice(i,i+l))}
  return arr.map(e=>e.reverse()).flat()
}
console.log(selReverse([1,2,3,4,5,6], 10))