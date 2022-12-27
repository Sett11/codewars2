function cake(x, y){
  return y.split``.map((el,i) => {
    if(i % 2 === 0){
      el = el.charCodeAt()
      return el
    } else{
      el = parseInt(el, 36) - 9
      return el
    }
  }).reduce((acc,curr) => acc+curr,0) > (x/100)*70 ? 'Fire!' : 'That was close!'
}
console.log(cake(900, 'abcdef'))