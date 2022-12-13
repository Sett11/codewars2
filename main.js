function wordValue(a) {
  return a.map((el) => {
    if(el){
     return el.replace(/\s/g, '').split('').map((el) => {
      return parseInt(el, 36) - 9
     }).map(el => Number.isNaN(el) ? el = 0: el = el).reduce((acc, curr) => acc+curr,0)
    }
  }).map(el => !!el === false ? el = 0: el = el).map((el, ind ) => el * (ind + 1) )
}
console.log(wordValue(["abc abc","abc abc","abc","abc"]))