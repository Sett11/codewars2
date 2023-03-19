function findMissingNumbers(a,b=[]){
  for(let i=Math.min(...a);i<=Math.max(...a);i++)if(!a.includes(i))b.push(i)
  return b
}

console.log(findMissingNumbers([-3,-2,1,4]))