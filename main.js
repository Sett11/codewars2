function scale(s, k, n) {
  if(s==='')return ''
  const arr = s.split`\n`.map(el=>el.split``)
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      arr[i][j] = arr[i][j].repeat(k)
    }
    arr[i] = arr[i].join``
    let str = ''
    str = arr[i] + '\n'
    arr[i] = str
    arr[i] = arr[i].repeat(n)
  }
  const res = arr.join``
  return res.slice(0,res.length-1)
}
console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3))