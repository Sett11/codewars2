function max(x){
  if(!Array.isArray(x))x=[...x]
  x=[...new Set(x)]
  if(typeof x[0]==='number')return x.sort((a,b)=>b-a)[0]
  if(typeof x[0]==='string')return x.sort((a,b)=>b.localeCompare(a))[0]
  return x.sort((a,b)=>Date.parse(b)-Date.parse(a))[0]
}
function min(x){
  if(!Array.isArray(x))x=[...x]
  x=[...new Set(x)]
  if(typeof x[0]==='number')return x.sort((a,b)=>a-b)[0]
  if(typeof x[0]==='string')return x.sort((a,b)=>a.localeCompare(b))[0]
  return x.sort((a,b)=>Date.parse(a)-Date.parse(b))[0]
}

console.log(max([new Date(2017,1,1), new Date(2015,2,2), new Date(2013,3,3)]))