function vertMirror(s) {
  return s.split`\n`.map(el=>el.split``.reverse().join``).join`\n`
}
function horMirror(s) {
  return s.split`\n`.reverse().join`\n`
}
function oper(fct, s) {
  return fct(s)
}
console.log(oper(horMirror, "abcd\nefgh\nijkl\nmnop"))