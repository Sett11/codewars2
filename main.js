function primeString(s) {
  if(s.length===1)return true
  for(let i=1;i<s.length/2+1;i++){
    if(s===s.slice(0,i).repeat(Math.floor(s.length/s.slice(0,i).length)))return false
  }return true
}
console.log(primeString('utdutdtdutd'))
console.log(primeString('abba'))