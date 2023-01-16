function rot90Clock(s) {
  s = s.split`\n`
  const arr = []
  for(let i = 0; i < s.length; i++){
    let str = ''
    for(let j = 0; j < s.length; j++){
      str+=s[j][i]
    }
    arr.push(str)
  }
  return arr.map(el=>el.split``.reverse().join``).join`\n`
}
function diag1Sym(s) {
  s = s.split`\n`
  const arr = []
  for(let i = 0; i < s.length; i++){
    let str = ''
    for(let j = 0; j < s.length; j++){
      str+=s[j][i]
    }
    arr.push(str)
  }
  return arr.join`\n`
}
function selfieAndDiag1(s) {
  s = s.split`\n`
  const arr = [], res = [], res2 = []
  for(let i = 0; i < s.length; i++){
    let str = ''
    for(let j = 0; j < s.length; j++){
      str+=s[j][i]
    }
    arr.push(str)
  }
  for(let i = 0; i < arr.length; i++){
    res.push(s[i])
    res.push('|')
    res.push(arr[i])
  }
  for(let i = 0; i < res.length; i+=3){
    res2.push(res.slice(i, i+3))
  }
  return res2.map(el=>el.join``).join`\n`
}
function oper(fct, s) {
  return fct(s)
}
console.log(oper(selfieAndDiag1, "abcd\nefgh\nijkl\nmnop"))