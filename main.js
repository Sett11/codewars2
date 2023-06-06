let primes=[2,3,5,7]
function isPrime(n){
  if(n<2)return false
  let i=0,limit=Math.round(Math.sqrt(n))
  while(true){
    if(i>=primes.length)expandPrimes(primes[i-1])
    if(primes[i]>limit)break
    if(!(n%primes[i]))return false
    i++
  }
  return true
}
const f=x=>{
  for(let i=1;++i<=Math.sqrt(x);)if(!(x%i))return !1
  return !0
}
const expandPrimes=n=>{
  while(1)if(f(++n))return primes.push(n)
}
console.log(isPrime(529))
console.log(primes)