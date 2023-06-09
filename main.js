const f=(n,i=2,a=[])=>{
  while(i<=n*n){
    while(!(n%i))n/=i,a.push(i)
    i++
  }
  return a
}
getAllPrimeFactors=n=>n===1?[1]:f(n)
getUniquePrimeFactorsWithCount=(n,c=f(n),t=[...new Set(c)])=>n===1?[[1],[1]]:[t,t.map(e=>c.filter(u=>u===e).length)]
getUniquePrimeFactorsWithProducts=(n,c=f(n),t=[...new Set(c)])=>n===1?[1]:[t.map(e=>e**c.filter(u=>u===e).length)].flat()

console.log(getAllPrimeFactors(100))
console.log(getUniquePrimeFactorsWithCount(100))
console.log(getUniquePrimeFactorsWithProducts(100))