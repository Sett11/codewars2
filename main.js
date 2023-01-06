function findDeletedNumber(arr, mixArr) {
  let res = 0
  for(let i = 0; i < arr.length; i++){
    if(!mixArr.includes(arr[i])){
      res=arr[i]
    }
  }
  return res
}
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))