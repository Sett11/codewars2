function productArray(numbers){
  const arr = []
  let counter = 0
  while(counter < numbers.length){
    arr.push(numbers.reduce((acc, curr) => acc * curr) / numbers[counter])
    counter++
  }
  return arr
}
console.log(productArray([12,20]))