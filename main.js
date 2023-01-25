function addArrays(array1, array2) {
  if(array1.length!==array2.length)throw new Error()
  const res = []
  for(let i = 0; i < array1.length; i++){
    res.push([array1[i], array2[i]])
  }
  return res.map(el=>el.reduce((a,c)=>a+c))
}
  console.log(addArrays([1,2],[4,5]))