conv=(s,o={'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine'})=>{
  const r=(x,y,z,a=[])=>{
    let r=(o[x].repeat(y)).slice(0,y)
    for(let i=0;i<r.length;i+=o[x].length)a.push(r.slice(i,i+o[x].length))
     if(z)a=a.map((e,i)=>i%2===0?e.toLowerCase():e.toUpperCase()).join``
     if(!z)a=a.map((e,i)=>i%2===0?e.toUpperCase():e.toLowerCase()).join``
     return a
  }
  const f=(x,y)=>[...x].map((e,i)=>y&&+e%2===0?r(e,i+1,y):!y&&+e%2!==0?r(e,i+1,y):e).join``
  return f(s,s.length%2==0)
}

console.log(conv('1101'))
console.log(conv('54563'))
console.log(conv('47309534'))
console.log(conv('15795379351687'))
