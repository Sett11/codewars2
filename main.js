function hammingDistance (a, b) {
	let counter = 0
  for(let i = 0; i < a.length; i++){
    if(a[i]!==b[i]){
      counter+=1
    }
  }
  return counter
}
console.log(hammingDistance('1010', '0101'))