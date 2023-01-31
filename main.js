function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i < Math.sqrt(n)+1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function twinPrime(n) {
  let count = 2,arr=[], res = 0
  while(count<=n+1){
    if(isPrime(count)){
      arr.push(count)
    }
    count++
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i+1]-arr[i]===2){
      res+=1
    }
  }
  return res
}
console.log(twinPrime(12))