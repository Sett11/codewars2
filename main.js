matrixAddition=(a,b,c=[],z=[])=>{
  let arr1=a.flat(),arr2=b.flat()
  for(let i=0;i<arr1.length;i++){c.push([arr1[i]+arr2[i]])}
  for(let i=0;i<c.length;i+=a.length){z.push(c.slice(i,i+a.length))}
  return z.map(e=>e.flat())
}

console.log(matrixAddition(
  [[1, 2, 3],
  [3, 2, 1],
  [1, 1, 1] ],

[ [2, 2, 1],
  [3, 2, 3],
  [1, 1, 3] ]))