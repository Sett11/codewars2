class bitVector{
    constructor(size){
        this.store = Array(~~(size/31)+1).fill(0)
        for (var i=3; i<~~Math.sqrt(size); i+=2) if (!this.isSet(i))
        for (var j=i*i, k=i<<1; j<size; j+=k) this.setBit(j)
    }
    setBit=function(bit){this.store[~~(bit/31)]|=1<<bit%31}
    isSet=function(bit){return (this.store[~~(bit/31)]&1<<bit%31)>0}
  }
 
  
  MAX_PRIME = 500000000
  sieve = new bitVector(MAX_PRIME)
  class Primes {
    static *stream() {
      yield 2
        for(let i=3;;i+=2)if(!sieve.isSet(i))yield i
    }
  }