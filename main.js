function fiveLine(s){
  s = s.trim()
  const arr = []
  for(let i = 1; i <=5; i++){
    arr.push((s).repeat(i))
  }
  for(let i = 1; i < 5; i++){
   arr[i] =  '\n' + arr[i]
  }
   return arr.join('')
}
console.log(fiveLine('a'))