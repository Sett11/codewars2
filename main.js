const f=x=>{for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return !1}return !0}
class M{
  constructor(a=[2,3,5,7,11,13,17,31,37]){this.a=a}
  c(n){
    let t=this.a[this.a.length-1]+2
    while(this.a.length<=n){
      if(f(t)&&f(+[...t+''].reverse().join``))this.a.push(t)
      t+=2
    }
    return this.a[n]
  }
}
const r=new M()
reversiblePrime=n=>r.c(n)

console.log(reversiblePrime(100))