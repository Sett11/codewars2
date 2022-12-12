const splitInParts = function(s, partLength){
  const arr = []
  const newS = s.split('')
  for(let i = 0; i < Math.ceil(newS.length/partLength); i++){
    arr[i] = newS.slice(i * partLength, i * partLength + partLength)
  }
  return arr.map(el => el.join('')).join(' ')
}
console.log(splitInParts("supercalifragilisticexpialidocious", 3))