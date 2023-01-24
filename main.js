function pattern(n) {
  let str = "";
  const arr = []
  while(n>0){
    arr.push(n)
    n--
  }
  while(arr.length!==0){
    str += `${arr.join``}${'\n'}`
    arr.pop()
  }
  return str.split`\n`.reverse().join`\n`.slice(1)
}
console.log(pattern(6));
