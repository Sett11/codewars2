function solve(s) {
  if(!s.includes('[backspace]'))return s
  s=s.replace(/\[backspace\]\*\d+/g,e=>e.replace(/[^\[\]a-z]/g,'').repeat(+e.replace(/\D/g,'')))
  return !s.includes('[backspace]')?s:solve(s.replace(/.?\[backspace\]/,''))
}

console.log(solve('[backspace]5nani'))