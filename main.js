function Mormons(s, r, t) {
  if(s>=t||s===s+(s*r))return 0
  let counter = 0
  while(s<t){
    s+=s*r
    counter++
  }
  return counter
}
console.log(Mormons(40, 2, 121))