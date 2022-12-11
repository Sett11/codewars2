function encode(str,  n){
  const arr = str.split('').map((el) =>{
    el = parseInt(el, 36) - 9
    return el
  })
  const newN = n.toString().repeat(arr.length)
  const nextNewN = (''+newN).split('').map(Number)
  for(let i = 0; i < arr.length; i++){
    arr[i] += nextNewN[i]
  }
  return arr
}

console.log(encode("masterpiece",1939))