function makeSentence(parts) {
  return parts.join` `.replace(/\s,/g,',').replace(/\./g,'').trim() + '.'
}
console.log(makeSentence([ 'hello', 'world', '.', '.', '.' ]))