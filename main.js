const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
const q=x=>+[...x+''].slice(0,2).join``
const w=x=>[...x+''].reverse().slice(0,2).join``
class M{
  constructor(){
    this.a=[1176]
  }
  c(a,b){
    let v=this.a.findIndex(e=>e>a)
    if(v!==-1){
      let t=this.a.findIndex(e=>e>b)
      if(t!==-1)return this.a.slice(v,t).length
    }
    let i=this.a[this.a.length-1]+1
    while(i<b){
      if(f(q(i))&&f(q(i*i))&&w(i)===w(i*i))this.a.push(i)
      i++
    }
    let x=this.a.findIndex(e=>e>a)
    return this.a.slice(x<0?0:x).length
  }
}
const r=new M()
const solve=(a,b)=>r.c(a,b)

console.log(solve(2,1200))
console.log(solve(2,1000000))
console.log(solve(2,100000))