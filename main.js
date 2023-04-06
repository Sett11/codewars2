greatestDistance=(a,c=0)=>{
  a.forEach(e=>c=Math.max(c,a.lastIndexOf(e)-a.indexOf(e)))
  return c
}

console.log(greatestDistance([9,7,1,2,3,7,0,-1,-2]))