function byteToSet(n){
	n=(n).toString(2)
  n='0'.repeat(8-n.length)+n
  return new Set([...n].map(Number).map((e,i)=>e?i:'&').filter(e=>e!=='&'))
}

console.log(byteToSet(3))
console.log(byteToSet(255))