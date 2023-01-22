function closestPairTonum(n) {
  for(let i = n-1; i > 0; i--){
    let tmp = i
    for(let j = n-2; j > 0; j--){
      let tmp2 = j
      if(Number.isInteger(Math.sqrt(tmp + tmp2))&&Number.isInteger(Math.sqrt(tmp-tmp2))&&tmp>tmp2){
        return [tmp, tmp2]
      }
    }
  }
}
console.log(closestPairTonum(50))