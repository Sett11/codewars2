function minSum(arr) {
    const arr2 = arr.sort((a,b) => a - b)
    let s = 0
    for(let i = 0; i < arr.length / 2; i++){
     s += arr2[i] * arr2[arr2.length - 1 - i]
    }
    return s
  }
  console.log(minSum([5,4,2,3]))