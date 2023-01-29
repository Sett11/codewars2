 sc=(a)=>{
  a=a.sort((a,b)=>a-b),z=[]
  for(i = 0; i < a.length; i++){
    z.push(a[i])
  }
  return z.filter((t,i)=>i%2==0).concat(a.filter((t,i)=>i&1).reverse())
}
console.log(sc([1,2,3,4,5,6,7,8,9]))