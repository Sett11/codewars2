function points(s,r=Object.entries([...s].reduce((a,c)=>(a[c]=a[c]+1||1,a),{})).sort((a,b)=>b[1]-a[1]),f=x=>{for(i=0;++i<x.length;){if(x[i]-x[i-1]!==1)return !1}return !0}){
  return r.length===1?50:r.length===2&&r[0][1]===4?40:r.length===2&&r[0][1]===3?30:r.length===5&&f(r.map(e=>+e[0]).sort((a,b)=>a-b).filter(e=>e!==1))?20:0
}

console.log(points('55555'))
console.log(points('22221'))
console.log(points('33322'))
console.log(points('12345'))
console.log(points('44421'))
console.log(points('12346'))