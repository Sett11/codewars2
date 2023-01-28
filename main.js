function sortItOut(array){
  const arr1 = [], arr2 = []
   array.map(el=>el&1?arr2.push(el):arr1.push(el))
   return arr2.sort((a,b)=>a-b).concat(arr1.sort((a,b)=>b-a))
}
  console.log(sortItOut([11,22,33,44,55,55,90.4,4,78]))