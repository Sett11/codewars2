reverseNumber=(n,m=[...n+''])=>m.includes('-')?+(m[0]+m.slice(1).reverse().join``):+m.reverse().join``
console.log(reverseNumber(321))