
function rot(s) {
  return s.split`\n`.map(el=>el.split``.reverse().join``).reverse().join`\n`
}
function selfieAndRot(s) {
  const res1 = s.split`\n`.map(el=>{
    el = el + '.'.repeat(el.length) + '\n'
    return el
  }).join``
  const res2 = s.split`\n`.map(el=>el.split``.reverse().join``).reverse().map(el=>{
    el = '\n' + '.'.repeat(el.length) + el
    return el
  }).join``
  return res1.slice(0, res1.length-1) + res2
}
function oper(fct, s) {
  return fct(s)
}
console.log(selfieAndRot("abcd\nefgh\nijkl\nmnop"))