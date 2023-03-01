function selectSubarray(a,b=Array(a.length).fill(a)){
  const res=b.map((e,i)=>{
    e=e.map((u,z)=>i===z?'&':u);e=[e,e.filter(e=>e!=='&')];e=[e[0],e[1],Math.abs(e[1].reduce((a,c)=>a*c)/(e[1].reduce((a,c)=>a+c)===0?1:e[1].reduce((a,c)=>a+c)))]
    return e
  }).sort((a,b)=>a[2]-b[2])[0]
  return [a.indexOf(a[res[0].indexOf('&')]),a[res[0].indexOf('&')]]
}
console.log(selectSubarray([1, 23, 2, -8, 5]))
console.log(selectSubarray([1, 3, 23, 4, 2, -8, 5, 18]))