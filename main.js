function fibonacci(n) {
    arr = [0, 1];
    for (let i = 0; i <= n; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    return arr.slice(0,n)
  }
console.log(fibonacci(5))