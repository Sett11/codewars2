function wave(str) {
  let arr = []
  for(let i = 0; i < str.length; i++){
    let l = str[i]
    if(l === ' '){
      continue
    } else{
      arr.push(str.slice(0, i) + l.toUpperCase() + str.slice(i+1))
    }
  }
  return arr
}
console.log(wave(" gap  "));
