function isValid(f) {
  return f.includes(1) && f.includes(2) ? false:
  f.includes(3) && f.includes(4) ? false:
  f.includes(5) && !f.includes(6) ? false:
  f.includes(6) && !f.includes(5) ? false:
  !f.includes(7) && !f.includes(8) ? false:true
}
console.log(isValid([1,7,3, 2]))