const f=x=>BigInt(x)
class M{
  constructor(){
    this.a=[[1],[1,1],[1,2,2],[1,3,5,5],[1,4,9,14,14]].map(e=>e.map(f))
  }
  c(x){
    while(this.a.length<x){
      let t=[f(1)]
      for(let i=0;++i<this.a[this.a.length-1].length;)t.push(t[i-1]+this.a[this.a.length-1][i])
      t.push(t[t.length-1])
      this.a.push(t)
    }
    return this.a[f(x)-1n].reduce((a,c)=>a+c)
  }
}
const r=new M()
const solve=n=>r.c(n)

console.log(solve(5))