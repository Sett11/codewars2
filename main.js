function splitAndMerge(string, separator) {
  return string.split(' ').map(el => el.split('').join(' ')).join(' ')
}
console.log(splitAndMerge("My name is John"," "))