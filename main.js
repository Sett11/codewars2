class M{
  constructor(){this.a=[[1],[2,3],[4,5,6],[7,8,9,10]]}
  c(n){
    while(this.a.length<n){
      let v=this.a[this.a.length-1],t=v[v.length-1],q=Array(v.length+1).fill(1).map((e,i)=>e+i+t)
      this.a.push(q)
    }
    return eval(this.a[n-1].join`+`)
  }
}
const r=new M()
cumulativeTriangle=n=>r.c(n)

console.log(cumulativeTriangle(10100))