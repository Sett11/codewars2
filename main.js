function maxProduct(a) {
  return a.splice(a.indexOf(Math.max(...a)), 1) * a.splice(a.indexOf(Math.max(...a)), 1)
}
console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))