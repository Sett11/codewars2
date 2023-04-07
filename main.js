function findNestedMaximum(a){
  return Math.max(...a.flat(100))
}

console.log(findNestedMaximum([4, -3, [10], [[-5, 6], 18]]))