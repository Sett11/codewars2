String.prototype.padLeft = function(ch, n) {
  return this.padStart(n,ch)
}
String.prototype.padRight = function(ch, n) {
  return [...[...this].reverse().join``.padStart(n,ch)].reverse().join``
}

console.log('2'.padRight('0',4))