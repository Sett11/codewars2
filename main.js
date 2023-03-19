findArray=(a1,a2,a=[])=>{
  for(let i=0;i<a2.length;i++)if(a1[a2[i]]!==undefined)a.push(a1[a2[i]])
  return a
}

console.log(findArray([1, 2, 3, 4, 5], [2,2,2]))