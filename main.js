function nClosestPairsTonum(n, k) {
  const arr = []
  for(let i = n-1; i > 0; i--){
    let tmp = i
    for(let j = n-2; j > 0; j--){
      let tmp2 = j
      if(Number.isInteger(Math.sqrt(tmp + tmp2))&&Number.isInteger(Math.sqrt(tmp-tmp2))&&tmp>tmp2){
        arr.push([tmp, tmp2])
      }
      if(arr.length===k){
        break
      }
    }
  }
  return arr
}
console.log(nClosestPairsTonum(10000, 8))