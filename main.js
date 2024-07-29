// function minMaxGap(a,m=1e9){
//   for(let i=-1;++i<a.length-2;)m=Math.min(a[i+2]-a[i])
//   return m
// }

minMaxGap=a=>{
  let m=Infinity
  for(let i=0;++i<a.length-1;){
    let b=a.slice()
    b.splice(i,1)
    m=Math.min(m,Math.max(...b.map((e,i,v)=>v[i+1]-e||0)))
  }
  return m
}

console.log(minMaxGap([ 1, 2,5,7]))