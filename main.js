add=(a,b)=>!b?a:add(a^b,(a&b)<<1)

console.log(add(5,7))