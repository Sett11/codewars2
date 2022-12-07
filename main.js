function maxProduct(numbers, size){
    return numbers.sort((a,b) => b - a).slice(0, size)
    .reduce((acc, curr) => acc * curr)
  }
  console.log(maxProduct([10,3,-27,-1], 3))