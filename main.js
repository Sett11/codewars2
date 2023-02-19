function deleteDigit(n) {
  let arr=[],tmp=[...(n+'')].map(Number)
  for(let i=0;i<tmp.length;i++){arr.push(+tmp.slice(0,i).concat(tmp.slice(i+1)).join``)}
  return Math.max(...arr)
}
console.log(deleteDigit(10))