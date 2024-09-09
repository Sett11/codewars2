function reverseFibo(n){
  let a=b=1,r='110'
  for(let i=3;i++<n;)[a,b]=[b,a+b],r=b+r
  return r
}

console.log(reverseFibo(10))