checkConcatenatedSum=(n,m)=>[...(n+'')].map(e=> n<0?-+e.repeat(m):+e.repeat(m)).filter(e=>e).reduce((a,c)=>a+c,0)===n

console.log(checkConcatenatedSum(-2997,3))