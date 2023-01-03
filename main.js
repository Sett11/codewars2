function scramble(str, arr) {
  arr = arr.map(el => [el])
  for(let i = 0; i < arr.length; i++){
    arr[i].push(str[i])
  }
  return arr.sort((a,b) => a[0] - b[0]).map(el => el[1]).join``
}
console.log(scramble('bskl5', [2,1,4,3,0]))