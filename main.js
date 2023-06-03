const f=x=>Object.values(x).reduce((a,c)=>a.concat(typeof c==='string'?[c]:f(Object.values(c))),[])
const q=x=>{
  for(let i=-1;++i<x.length;){
    let v=Math.floor(Math.random()*x.length),t=x[i]
    x[i]=x[v],x[v]=t
  }
  return x
}
Object.prototype.random=function(){
  const w=this.toRandomArray()[0]
  return typeof w==='object'?Object.values(w)[0]:w
}
Object.prototype.toRandomArray=function(){
  const r=Object.values(Object.values(this))
  r[0]=typeof r[0]==='object'?Object.values(r[0])[0]:r[0]
	return r.length===1?r.filter(e=>e):q(f(this))
}
const o={ w: 'a', q: 'b', e: { w: { q: 'c' } } }
const r={ a: 1 }
console.log(o.random())
console.log(o.toRandomArray())
console.log(r.random())
console.log(r.toRandomArray())