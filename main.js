function remove (string) {
  const res = string.split('').map(el => el === '!' ? el = '&': el=el).filter(el => el !== '&')
  res.push('!')
  return res.join('')
}
console.log(remove("Hi"))