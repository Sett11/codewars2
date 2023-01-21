function solve(x, y) {
  const arr = []
  for(let i = x; i < y; i++){
    if((i).toString().match(/2|3|4|5|7/g)){
      continue
    }
    arr.push(i+[])
  }
  return arr.filter(el=>el===el.replace(/6|9/g, ul=>ul==='6'?'9':'6').split``.reverse().join``).length
}
 console.log(solve(10, 100))