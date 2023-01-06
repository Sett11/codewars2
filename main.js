function maxSum(arr,range){
  const res = []
  for(let i = 0, j = 0; i < arr.length, j < range.length; i++, j++){
    res.push(arr.slice(range[j][0], range[j][1]+1))
  }
  return Math.max(...res.map(el=>el.reduce((acc,curr)=>acc+curr,0)))
}
console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))