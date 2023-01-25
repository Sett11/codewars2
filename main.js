function whitespaceNumber(n) {
  console.log(n)
  let res = (Math.abs(n)).toString(2)
  if(n>0){
    res = '+' + res
  }
  if(n<0){
    res = '-' + res
  }
  return res.replace(/^-/g, '\t').replace(/^\+/, ' ')
  .replace(/1/g,'\t').replace(/0/g,' ') + '\n'
}
console.log(whitespaceNumber(-1))