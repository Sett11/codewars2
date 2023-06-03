const f=x=>{
  for(let i=-1;++i<x.length/2;){
    let v=Math.floor(Math.random()*x.length),t=x[i]
    x[i]=x[v],x[v]=t
  }
  return x
}
class Randomizer{
  constructor(s=0,e=9){
    this.s=s
    this.e=e
    this.n=f(Array(e-s+1).fill(1).map((_,i)=>i+s))
  }
  next(){
  if(this.n.length===0)throw new Error('No more numbers')
  let t=Math.floor(Math.random()*this.n.length)
	return this.n.splice(t,1)[0]
  }
  sequence(s){
	if (s===undefined)s=this.n.length
	if(s>this.n.length||!s)throw new Error('Too many numbers')
	return this.n.splice(0,s)
  }
}
const r=new Randomizer(0,9)
console.log(r.next())
console.log(r.sequence(2))
console.log(r)