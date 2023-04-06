function certainSum(a,b){
  return Number.isSafeInteger(a)&&Number.isSafeInteger(b)&&Number.isSafeInteger(a+b)
}

console.log(certainSum(2,2))