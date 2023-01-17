function countAdjacentPairs(s) {
  s = s.split` `.map(el=>el.toLowerCase())
  let counter = 0
  let cash = ''
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i+1]&&s[i]!==cash){
      counter++
      cash = s[i]
    }
    if(s[i]!==cash){
      cash = ''
    }
  }
  return counter
}
console.log(countAdjacentPairs("dog dog DOG dog dog dog" ))