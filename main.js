class bitVector{
  constructor(size){
      this.store = Array(~~(size/31)+1).fill(0)
      for (var i=3; i<~~Math.sqrt(size); i+=2) if (!this.isSet(i))
      for (var j=i*i, k=i<<1; j<size; j+=k) this.setBit(j)
    }
  setBit(bit){this.store[~~(bit/31)]|=1<<bit%31}
  isSet(bit){return (this.store[~~(bit/31)]&1<<bit%31)>0}
}




MAX_PRIME = 400000000
sieve = new bitVector(MAX_PRIME)
class Primes {
  static *stream() {
      for(let i=3;;i+=2)if(!sieve.isSet(i))yield i
  }
}

const primeList=n=>{
  let a=2,r=[]
  const p=Primes.stream()
  while(a<n){
    r.push(a)
    a=p.next().value
  }
  return r
}


  console.log(primeList(100))
  console.log(primeList(1000))