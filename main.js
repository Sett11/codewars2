function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i < Math.sqrt(n)+1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimes(s, f) {
  arr=[]
  if(s<f){
    while(s<=f){
      if(isPrime(s)){
        arr.push(s)
      }
      s++
    }
  }else{
    while(f<=s){
      if(isPrime(f)){
        arr.push(f)
      }
      f++
    }
  }
  return arr
}
console.log(getPrimes(30,0))