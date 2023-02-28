divisors=(n,i=2,a=[])=>i>=n/2+1&&!a.length?`${n} is prime`:i>=n/2+1?a:n%i===0?a.push(i)&&divisors(n,i+1,a):divisors(n,i+1,a)

console.log(divisors(36))