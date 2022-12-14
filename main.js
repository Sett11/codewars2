function stringMerge(string1, string2, letter){
  const s1 = string1.split('')
  const s2 = string2.split('')
  const ind1 = s1.indexOf(letter)
  const ind2 = s2.indexOf(letter)
  return s1.slice(0, ind1).concat(s2.slice(ind2, s2.length)).join('')
}
console.log(stringMerge("coding", "anywhere", "n"))