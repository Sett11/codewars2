function nthFibo(n) {
    const arr = [0,1]
    for(let i = 0; i <= n; i++){
      arr.push(arr[i] + arr[i+1])
    }
    return arr[n-1]
  }
  console.log(nthFibo(4))