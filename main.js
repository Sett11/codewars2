divide2357=(a,f=e=>e%2===0?f(e/2):e%3===0?f(e/3):e%5===0?f(e/5):e%7===0?f(e/7):e)=>a.map(e=>f(e))

console.log(divide2357([1,2,3,4,5,6]))