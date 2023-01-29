 sc=a=>{
  a=a.sort((a,b)=>a-b),z=a.slice()
  return z.filter((t,i)=>i%2==0).concat(a.filter((t,i)=>i&1).reverse())
}
console.log(sc([1,2,3,4,5,6,7,8,9]))