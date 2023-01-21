function diag2Sym(s) {
  s = s.split`\n`.map(el=>el.split``.reverse().join``)
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
function rot90Counter(s) {
  return diag2Sym(s).split`\n`.map(el=>el.split``.reverse().join``).join`\n`
}
function selfieDiag2Counterclock(s) {
  const newS = s.split`\n`, s1 = diag2Sym(s).split`\n`, s2 = rot90Counter(s).split`\n`, arr = []
  for(let i = 0; i < newS.length; i++){
    let str = ''
      str = newS[i] + '|' + s1[i] + '|' + s2[i]
      arr.push(str)
  }
  return arr.join`\n`
}
function oper(fct, s) {
  return fct(s)
}

console.log(oper(selfieDiag2Counterclock ,"abcd\nefgh\nijkl\nmnop"))