function alphaSeq (str) {
  str = str.toLowerCase().split``.sort(), s = ''
  for(let i = 0; i < str.length; i++){
    s+=`${str[i].toUpperCase()}${str[i].repeat(parseInt(str[i], 36)-10)},`
  }
  return s.slice(0, s.length-1)
}
console.log(alphaSeq('ZpglnRxqenU'))