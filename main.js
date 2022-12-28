function determineTime (d) {
  const arr = d.map(el => el.split(':'))
  const res = Array(3).fill(0).map(el => [el])
  for(let i = 0; i < arr.length; i++){
    res[0].push(arr[i][0])
    res[1].push(arr[i][1])
    res[2].push(arr[i][2])
  }
  const nextRes = res.map(el => el.map(Number).reduce((acc,curr) => acc+curr,0))
  if(nextRes[2] > 60){
    let tmp = Math.floor(nextRes[2] / 60)
    nextRes[2] = nextRes[2] % 60
    nextRes[1] = nextRes[1] + tmp
  }
  if(nextRes[1] > 60){
    let tmp = Math.floor(nextRes[1] / 60)
    nextRes[1] = nextRes[1] % 60
    nextRes[0] = nextRes[0] + tmp
  }
  return nextRes[0] < 24 || nextRes[0] === 24 && nextRes[1] === 0 && nextRes[2] === 0 ? true : false
}
console.log(determineTime(["12:00:00", "12:00:01"]))