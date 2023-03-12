function roofFix(f, r,a=[...f].map((e,i)=>e===' '?i+1:0).filter(e=>e),b=[...r].map((e,i)=>e==='\\'||e==='/'?i+1:0).filter(e=>e)){
  return b.every(e=>a.includes(e))
}
console.log(roofFix("d  egl mfl    j  jce a     " , "/_/________/_______________"))