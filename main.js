function multiply(a, b){
  const arr = Array(a.length + b.length).fill(0)
  for(let i = a.length; i--; null){
    let count = 0
    for(let j = b.length; j--; null){
      arr[1+i+j] += count + a[i] * b[j]
      count = Math.floor(arr[1+i+j] / 10)
      arr[1+i+j] = arr[1+i+j] % 10
    }
    arr[i] += count
  }
  return arr.join('').replace(/^0*(\d)/, '$1')
}
