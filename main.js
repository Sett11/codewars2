function sumCubes(n){
    let arr = []
    let count = 1
    while(n>=count){
        arr.push(count)
        count++
    }
    return arr.map(el => el ** 3).reduce((acc, curr) => acc + curr)
  }
  console.log(sumCubes(3))