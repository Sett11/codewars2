function logicalCalc(array, op){
  if(op === 'AND'){
    let arr = array.join('&&')
    return eval(arr)
  }
  if(op === 'OR'){
    let arr = array.join('||')
    return eval(arr)
  }
  if(op === 'XOR'){
    let arr = array.join('^')
    return !!eval(arr)
  }
}
console.log(logicalCalc([true, true, true, false], "XOR"))