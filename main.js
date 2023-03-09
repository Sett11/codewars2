function amicableNumbers(a,b,c=0,d=0) {
  for(let i=1;i<Math.max(a,b)/2+1;i++){
    if(a%i===0)c+=i
    if(b%i===0)d+=i
  }
  return a===d&&b===c
}

console.log(amicableNumbers(220,284))