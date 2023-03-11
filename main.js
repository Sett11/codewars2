function getMean(a, x, y) {
  if(x<2||y<2||x>a.length||y>a.length)return -1
  const one=a.slice(0,x),two=a.slice(-y)
  return (one.reduce((a,c)=>a+c,0)/one.length+two.reduce((a,c)=>a+c,0)/two.length)/2
}
console.log(getMean([1,3,2,4],2,3))