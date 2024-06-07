function each(n,a){
  a=n<0?a.reverse():a
  a.unshift(0)
  n=Math.abs(n)
  return n&&n<=a.length?a.filter((_,i)=>!(i%n)&&i):[]
}

console.log(each(0,[1,2,3,4,5,6]))