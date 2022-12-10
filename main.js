function nbDig(n, d) {
  const arr = []
  while(n>=0){
    arr.push(n**2)
    n--
  }
  const newArr = arr.join('').split('')
  const res = newArr.map((el) => {
    if(el === d.toString()){
      el = '&'
      return el
    } else{
      return el
    }
  })
  return res.length - res.filter(el => el !== '&').length
}
console.log(nbDig(5750, 0))