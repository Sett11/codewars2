function tea42(input) {
  if(typeof input !== 'string'){
    input = String(input)
  }
  return input.replace(/2/g,'t')
}
console.log(tea42(9022))