function consonantCount(str) {
  return str.replace(/a|u|e|i|o|_/gi,'').replace(/[^a-zA-Z]/gi,'').length
}
console.log(consonantCount("0123456789"))