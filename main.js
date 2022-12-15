const sequenceSum = (begin, end, step) => {
  const arr = []
  for(let i = begin; i <= end; i+=step){
    arr.push(i)
  }
  return arr.reduce((acc, curr) => acc + curr, 0)
}
console.log(sequenceSum(2,2,2))