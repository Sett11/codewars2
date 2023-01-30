function powerSumDigTerm(n) {
  const res = [81,512,2401,4913,5832,17576,19683,234256,390625,614656,1679616,17210368]
  //if(n<res.length)return res[n]
  let counter = res[res.length-1]+1
  while(res.length<n){
    for(let i = 2; i < 10; i++){
      if((counter+'').split``.map(Number).reduce((a,c)=>a+c,0)**i==counter){
        res.push(counter)
        break
      }
    }
    counter++
  }
  return counter
}
console.log(powerSumDigTerm(13))