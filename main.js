function pell(n) {
  const arr=[0n,1n,2n]
  if(arr.length>n)return arr[n]
  for(let i=3;arr.length<=n;i++){
    arr.push(2n*BigInt(arr[i-1])+BigInt(arr[i-2]))
  }return arr[n]
}
console.log(pell(100))