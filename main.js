function padovan(n) {
  const arr=[1,1,1]
  if(arr.length>=n+1)return arr[n]
  for(let i=3;arr.length<n+1;i++){
    arr.push(arr[i-2]+arr[i-3])
  }return arr[n]
}
console.log(padovan(9))