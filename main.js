function solution(m,n=m+''){
  if(n.length<3||n.length>4)throw Error('should raise an exception')
  return n.length===3?`${n[0]}:${n.slice(1)}`:`${n.slice(0,2)}:${n.slice(2)}`
}

console.log(solution(100))