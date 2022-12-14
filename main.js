function divisibleByThree(str){
  const n = str.split('').map(Number).reduce((acc, curr) => acc + curr, 0) / 3
  return Number.isInteger(n)
}
console.log(divisibleByThree('123'))