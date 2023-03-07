class BitMath {
  static add(a, b) {
    if(b===0)return a
    let s=a^b,c=(a&b)<<1
    return this.add(s,c)
  }
}

console.log(BitMath.add(5,5))