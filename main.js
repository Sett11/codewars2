lastThreeDigits=(m,n,f=x=>BigInt(x))=>(f(m)**f(n)+'').slice(-3)

console.log(lastThreeDigits(22,33))