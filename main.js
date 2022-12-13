function Xbonacci(signature,n){
  signature.push(signature.reduce((acc, curr) => acc+curr))
  for(let i = 1; i < n; i++){
    signature.push(signature.slice(i, signature.length).reduce((acc, curr) => acc + curr))
  }
  signature.length = n
  return signature
}
console.log(Xbonacci([1,1],10))