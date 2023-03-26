function getFunction(n,a=[],c=n[0]){
  console.log(n)
  if(n.every(e=>e===n[0]))return `f(x) = ${n[0]}`
  for(let i=n.length-1;i>1;i--)a.push(n[i]-n[i-1])
  if(!a.every(e=>e===a[0]))return "Non-linear sequence"
  if(c<0&&a[0]<0)return `f(x) = -${Math.abs(a[0])===1?'':Math.abs(a[0])}x - ${Math.abs(c)}`
  if(c<0)return `f(x) = ${Math.abs(a[0])===1?'':a[0]}x - ${Math.abs(c)}`
  if(a[0]===1&&!c)return `f(x) = x`
  if(c>0&&a[0]<0)return `f(x) = -${Math.abs(a[0])===1?'':Math.abs(a[0])}x + ${c}`
  if(c>0)return `f(x) = ${Math.abs(a[0])===1?'':Math.abs(a[0])}x + ${c}`
  return `f(x) = ${Math.abs(a[0])===1?'':a[0]}x`
}

console.log(getFunction([0, 1, 2, 3, 4]))
console.log(getFunction([0, 3, 6, 9, 12]))
console.log(getFunction([ 3, -1, -5, -9, -13 ]))