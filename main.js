class KeywordCipher{
  constructor(a,k){
    this.a=a
    this.k=k
    this.r=[...new Set(k+a)]
  }
  encode(s){
    return [...s].map(e=>this.r[this.a.indexOf(e)]?this.r[this.a.indexOf(e)]:e).join``
  }
  decode(s){
    return [...s].map(e=>this.a[this.r.indexOf(e)]?this.a[this.r.indexOf(e)]:e).join``
  }
}

const abc = "abcdefghijklmnopqrstuvwxyz"
const key = "keyword"
const cipher = new KeywordCipher(abc, key)

console.log(cipher.decode("key"))