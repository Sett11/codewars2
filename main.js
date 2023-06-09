class BloomFilter{
  constructor(z,...a){
    this.arr=Array(z).fill(false)
    this.f=a
  }
  p(x){
    return this.f.map(e=>e(x)%this.arr.length)
  }
  add(s){
    const r=this.p(s)
    this.arr=this.arr.map((e,i)=>r.includes(i)?true:e)
  }
  check(s){
    const r=this.p(s)
    if(r.some(e=>!this.arr[e]))return false
    return true
  }
}

function xorHash(str) {
  let val = 0
  for (let i = 0; i < str.length; ++i) {
    val ^= str.charCodeAt(i)
  }
  return val
}
function addHash(str) {
  let val = 0
  for (let i = 0; i < str.length; ++i) {
    val += str.charCodeAt(i)
  }
  return val
}
const r=new BloomFilter(64, xorHash, addHash)

r.add('Alice')
console.log(r.check('Alice'))
console.log(r.check('Bob'))