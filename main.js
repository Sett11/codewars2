function maxAndMin(arr1,arr2){
  const arr = []
  arr1.map(el=>{
    for(let i = 0; i < arr2.length; i++){
      arr.push(Math.abs(el - arr2[i]))
    }
  })
  return [Math.max(...arr), Math.min(...arr)]
}
console.log(maxAndMin([3,10,5],[20,7,15,8]))