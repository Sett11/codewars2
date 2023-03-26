const maxSpan=(a,c=0)=>{
  a.forEach((e,i,v)=>c=Math.max(v.lastIndexOf(e)-v.indexOf(e),c))
  return c+1
}

console.log(maxSpan([1, 4, 2, 1, 4, 1, 4, 9, 7, 7, 7]))