function isTriangular(t) {
  return Number.isInteger(Math.sqrt((t*8)+1))
}
console.log(isTriangular(7))