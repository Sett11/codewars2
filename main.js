function multiple(x) {
  return x % 3 === 0 && x % 5 === 0 ? 'BangBoom' :
  x % 3 === 0 && x % 5 !== 0 ? 'Bang' :
  x % 5 === 0 && x % 3 !== 0 ? 'Boom': 'Miss'
}
console.log(multiple(30))