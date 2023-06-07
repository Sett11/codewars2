class M{
  constructor(){this.a=[1,1,2,3,3,4,5,5,6,6,6,8,8,8,10,9,10,11,11,12,12,12,12]}
  c(n){
    while(this.a.length<n){
      let t=this.a.length
      this.a.push(this.a[t-this.a[t-1]]+this.a[t-this.a[t-2]])
    }
    return this.a.slice(0,n)
  }
}
const r=new M()
lengthSupUK=(n,k)=>r.c(n).filter(e=>e>=k).length
comp=(n,k=0)=>r.c(n).forEach((e,i,v)=>e<v[i-1]?k++:0)|k

console.log(lengthSupUK(50,25))
console.log(lengthSupUK(3332, 973))
console.log(lengthSupUK(2941, 862))
console.log(lengthSupUK(3177, 573))
console.log(lengthSupUK(1745, 645))

console.log(comp(74626))
console.log(comp(71749))