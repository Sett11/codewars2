function solve(arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr.lastIndexOf(arr[i]))
    }
    const set = [...new Set(newArr)].sort((a,b) => a-b)
    const res = []
    for(let i = 0; i < set.length; i++){
        res.push(arr[set[i]])
    }
    return res
  }
  console.log(solve([1,1,4,5,1,2,1]))