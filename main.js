function insideOut(x){
  return x.split` `.map(el => el.split``).map((el) => {
    if(el.length < 4){
      return el
    }
    if(el.length % 2 === 0 && el.length > 3){
      el = el.slice(0, el.length/2).reverse().concat(el.slice(el.length/2).reverse())
      return el
    }
    if(el.length % 2 !== 0 && el.length > 3){
      el = el.slice(0, Math.floor(el.length/2)).reverse() + el.join``.charAt(Math.floor(el.length/2)) + el.slice(Math.ceil(el.length/2)).reverse()
      return el
    }
  }).join` `.replace(/,/g, '')
}
console.log(insideOut('take me to semynak'))