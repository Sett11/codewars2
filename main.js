function nthSmallest(arr, pos){
  const arr1 = arr.sort((a,b) => a - b)
  return arr1[pos-1]
}
console.log(nthSmallest([-102,-16,-1,-2,-367,-9], 5))