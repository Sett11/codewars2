function tribonacci(signature,n){
  if(n <=0){
    return[]
  }
  if(n === 1){
    return [signature[0]]
  }
  if(n === 2){
    return [signature[0], signature[1]]
  }
  signature.push(signature.reduce((acc, curr) => acc+curr))
  for(let i = 1; i < n-3; i++){
    signature.push(signature.slice(i, signature.length).reduce((acc, curr) => acc + curr))
  }
  return signature
}
console.log(tribonacci([13, 16, 3], 2))