function disariumNumber(n){
  return (''+n).split('').map(Number).map((el, i) => {
    return el**(i+1)
  }).reduce((acc, curr) => acc + curr) === n ? "Disarium !!" : "Not !!"
}
console.log(disariumNumber(1024))