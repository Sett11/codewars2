function triangularSum(n,c=1,a=[]) {
  while(1){
    if(a[a.length-1]+a[a.length-2]===n)return true
    if(a.some(e=>e>n))break
    if(Number.isInteger(Math.sqrt(8*c+1)))a.push(c**2)
    c++
  }
  return false
}

console.log(triangularSum(999))