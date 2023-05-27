function isDivisibleBy6(s,f=x=>BigInt(x),a=[]){
  for(let i=-1;++i<10;)a.push(s.replace(/\*/,i))
  return a.filter(e=>f(e)%f(6)===f(0))
}

console.log(isDivisibleBy6("1*0"))
console.log(isDivisibleBy6("34234*2"))
console.log(isDivisibleBy6("1234567890123456789012345678*0"))