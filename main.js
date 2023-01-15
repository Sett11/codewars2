function lowestProduct(input) {
  if(input.length < 4) return "Number is too small"
  let arr = []
  for(let i = 0; i < input.length; i++){
    arr.push(input.slice(i, i+4))
  }
  arr = arr.filter(el=>el.length>=4)
  return Math.min(...arr.map(el=>el.split``.map(Number).reduce((acc,curr)=>acc*curr)))
}
console.log(lowestProduct('1234111'))