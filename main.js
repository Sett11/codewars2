function numbers () {
  return [...arguments].every(el=>typeof el === 'number')
}
console.log(numbers(1,2,3,4,5,NaN))