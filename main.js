function eqSumPowdig(hMax, exp) {
  let arr = [], counter = 2
  while(counter<=hMax){
    if((counter+'').split``.map(Number).map(el=>el**exp).reduce((a,c)=>a+c,0)==counter){
      arr.push(counter)
    }
    counter++
  }
  return arr
}
console.log(eqSumPowdig(400,3))