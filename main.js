function hist(s) {
  s = s.replace(/[^w+|u+|z+|x+]/gi, '').split``.sort().join``.replace(/w+|u+|z+|x+/gi, ' $&').split` `.filter(el=>el!=='')
  let str = ''
  for(let i = 0; i < s.length; i++){
    str += `${s[i][0]}  ${s[i].length}     ${'*'.repeat(s[i].length)}${'\n'}   `
  }
  return str.slice(0, str.length) 
}
console.log(hist("tpwaemuqxdmwqbqrjbeosjnejqorxdozsxnrgpgqkeihqwybzyymqeazfkyiucesxwutgszbenzvgxibxrlvmzihcb"))