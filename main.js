function doubleEveryOther(a) {
  return a.map((el,i) => {
    if(Number.isInteger(el) && i % 2 !== 0){
      el = el * 2
      return el
    } else {
      return el
    }
  })
}
console.log(doubleEveryOther([1,2,3,4]))