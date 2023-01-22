function squaresToOdd(sqr1, sqr2){
  const counter = sqr1-sqr2, sum = sqr1**2 - sqr2**2, arr = [], res = []
  if(counter===1){
    return `${sqr1}^2 - ${sqr2}^2 = ${sum} = ${sum}`
  }
  for(let i = 0; i <= sum; i++){
      if(i%2!==0){
        arr.push(i)
      }
  }
  for(let i = 0, j = counter; i < arr.length, j < arr.length; i+=1, j+=1){
    if(arr.slice(i, j).reduce((acc,curr)=>acc+curr,0)===sum){
      res.push(arr.slice(i,j))
    }
  }
  return `${sqr1}^2 - ${sqr2}^2 = ${String(res).replace(/,/g,' + ')} = ${sum}`
}
console.log(squaresToOdd(100,99))