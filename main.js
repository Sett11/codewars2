const findMaxProduct=a=>{
  let m=-Infinity
  for(let i=-1;++i<a.length;){
    m=Math.max(m,a.slice(i).filter((_,j)=>!(j%(i+1))).reduce((a,c)=>a*c))
  }
  return m
}

console.log(findMaxProduct([4, 6, 8, 11, 13, 5, 7, 9]))