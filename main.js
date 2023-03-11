function solution(){
  return [...arguments].some((e,i,v)=>v.indexOf(e)!==v.lastIndexOf(e))
 }
 console.log(solution(1,2,3,6,5,6))