function negationValue(s, v) {
  const F = (z) => !z
  const Z = (f) => !!f
  if(s.length%2===0)return Z(v)
  return F(v)
}
console.log(negationValue("!", false))