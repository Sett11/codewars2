function solve(s, k){
  let str = 'abcdefghijklmnopqrstuvwxyz'.split``
  const arr = []
  for(let i = 0; i < str.length; i++){
    if(s.indexOf(str[i]) !== -1){
      arr.push(s.indexOf(str[i]))
    } else{
      str[i] = 0
    }
  }
  str = str.filter(el => el !== 0)
  let cou = 0
  let counter = 0
  while(cou < k){
    let r = new RegExp(`${str[counter]}`)
    s = s.replace(r, '')
    if(s.indexOf(str[counter]) === -1){
      counter++
    }
    cou++
  }
  return s
}
console.log(solve('abracadabra', 6))