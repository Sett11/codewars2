function decode  (code, n) {
  const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const num = String(n).repeat(20).split``.map(Number)
  for(let i = 0; i < code.length; i++){
    code[i] -= num[i]
  }
  for(let i = 0; i <= arr_en.length + 20; i++){
    code[i] = arr_en[code[i]-1]
  }
  return code.filter(el => el).join``
}
console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939))