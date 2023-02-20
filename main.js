function Dictionary(words) {
  this.words = words;
}
Dictionary.prototype.getMatchingWords = function(p) {
  p=p.replace(/\?/g,'.')
  return this.words.map(e=>e.match(p)&&e.length===p.length?e.match(p):0).map(e=>e?e[0]:e).filter(e=>e)
}

console.log(new Dictionary(['banana', 'apple', 'papaya', 'cherry']).getMatchingWords('?????'))