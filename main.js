z=n=>{
  c=0
  while(n>=1)n/=2,c++
  return c
}

console.log(z(4))
console.log(z(1000))
console.log(`z=n=>{
  c=0
  while(n>=1)n/=2,c++
  return c
}`.length)