function fibonacci(n) {
    arr = [0, 1];
    for (let i = 0; i <= n; i++) {
        if(arr[i]+arr[i+1]>=n){
            break
          }
      arr.push(arr[i] + arr[i + 1])
    }
    return arr.filter(el=>el%2===0).reduce((a,c)=>a+c)
}
console.log(fibonacci(1000000000))