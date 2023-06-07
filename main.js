const f=x=>{if(x<2)return !1;if(x===2)return !0;for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return !1}return !0}
class M{
  constructor(a=[]){
    this.a=a
  }
  c(x,y){
    const z=this.a.findIndex(e=>e>=x),v=this.a.findIndex(e=>e>y)
    const arr=this.a.slice(z===-1?0:z,v===-1?this.a.length:v).filter(e=>e<y),r=[]
    for(let i=-1;++i<arr.length;)for(let j=i-1;++j<arr.length;)if(f(eval([...(arr[i]*arr[j])+''].join`+`)))r.push([arr[i],arr[j]])
    return r.length
  }
}
const r=new M(Array(10000).fill(1).map((e,i)=>e+i).filter(f))
function solve(a,b){   
  return r.c(a,b)
}

console.log(solve(0,200))