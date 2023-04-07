function joust(l,v,r) {
	if(l[0].indexOf('>')>=l[1].indexOf('<')||v===0&&r===0)return l
  l[0]= v>0?' '.repeat(v)+l[0].slice(0,-v):l[0]
  l[1]=r>0?l[1].slice(r)+' '.repeat(r):l[1]
  return joust(l,v,r)
} 

console.log(joust(
  [
    "$->     ",
    "     <-P"
  ], 0, 2))