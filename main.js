function digPow(n, p){
  const arr = (''+n).split('').map(Number)
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i]**p++)
  }
  const total = newArr.reduce((acc, curr) => acc + curr)
  let res = 0
  for(let i = 0; i < 15000; i++){
    n * i
    if(n*i === total){
      res += i
      break
    }
  }
  return res ? res: -1
}
console.log(digPow(89, 1))