function explode(s) {
  return s.split('').map((el, i) => {
   return el.toString().repeat(el)
  }).filter(el => el !== '').join('')
}
console.log(explode("102269"))