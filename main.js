function digitDegree(n,c=1){
  const t=[...n+''].reduce((a,c)=>a+ +c,0)
  return [...n+''].length===1?0:[...t+''].length===1?c:digitDegree(t,c+1)
}

console.log(digitDegree(1))