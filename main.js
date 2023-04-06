function certainSum(a,b){
  return Number.isSafeInteger(a)&&Number.isSafeInteger(b)&&Number.isSafeInteger(a+b)?a+b:!1
}