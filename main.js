const f=(n,i=2,a=[])=>{
  while(i<=n*n){
    while(!(n%i))n/=i,a.push(i)
    i++
  }
  return a.length
}
function consecKprimes(k,a,c=0){
  a=a.map(e=>f(e))
  for(let i=-1;++i<a.length-1;)if(a[i]===k&&a[i]===a[i+1])c++
  return c
}

console.log(consecKprimes(2, [10110, 10102, 10097, 10113, 10123, 10109, 10118, 10119, 10117, 10115, 10101, 10121, 10122]))