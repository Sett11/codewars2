sc=n=>{
    a=[]
  for(i=1;i<=n;i++){if(n%i==0)a.push(i)}n=n.toString(2)
  return a.filter(e=>n.includes(e.toString(2)))
}
console.log(sc(100))
// function specialPrimes(n,m=251){
//     const isPrime=(a,b=2)=>b*b>a?!0:a%b?isPrime(a,++b):!1
//     const arr = []
//     while(m<=n){tmp=(m+'').split``.map(Number);if(isPrime(m)&&!tmp.includes(0)&&tmp[0]*tmp[2]!==45&&[...new Set(tmp)].length===tmp.length&&tmp.reduce((a,c)=>a+c)%2===0)arr.push(m);m++}
//     return arr
// }
// console.log(specialPrimes(457))