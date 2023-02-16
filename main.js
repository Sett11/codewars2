
sc=s=>[...s].reduce((a,c,i)=>c==s[i+1]?a+2:a+7,1)-7

  console.log(sc("-+-+-+"))
  console.log(sc("---+++"))
  console.log(sc("-+-+-----------"))
  console.log(sc("-+-+-++++++++++"))

// function specialPrimes(n,m=251){
//     const isPrime=(a,b=2)=>b*b>a?!0:a%b?isPrime(a,++b):!1
//     const arr = []
//     while(m<=n){tmp=(m+'').split``.map(Number);if(isPrime(m)&&!tmp.includes(0)&&tmp[0]*tmp[2]!==45&&[...new Set(tmp)].length===tmp.length&&tmp.reduce((a,c)=>a+c)%2===0)arr.push(m);m++}
//     return arr
// }
// console.log(specialPrimes(500))