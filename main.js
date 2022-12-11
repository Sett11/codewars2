function maxTriSum(numbers){
  const arr = [...new Set(numbers.sort((a,b) => b - a))]
  return arr[0] + arr[1] + arr[2]
}
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))