function largestPairSum (numbers) {
  const result = numbers.sort((a,b)=>b-a)
  return result[0] + result[1]
}
console.log(largestPairSum([10, 14, 2, 23, 19]))