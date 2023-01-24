function alternateSqSum(arr){
  return arr.map((el,i)=>i%2!==0?el**2:el).reduce((acc,curr)=>acc+curr,0)
}
console.log(alternateSqSum([1,2,3,4,5]))