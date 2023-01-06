function eliminateUnsetBits(number) {
  return number.match(/1/g)===null?0:parseInt(number.replace(/0/g, ''), 2)
}
console.log(eliminateUnsetBits('11010101010101'))