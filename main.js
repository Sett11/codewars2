const sumNested = arr => {
  return arr.flat(100).reduce((acc,curr)=>acc+curr,0)
}
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]))