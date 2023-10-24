const sharePrice = (n,a) => (a.forEach(e=>e<0?n-=n/Math.abs(100/e):n+=n/(100/e)))||(n).toFixed(2)

console.log(sharePrice(100,[-50,50]))
console.log(sharePrice(100,[-20,30]))
console.log(sharePrice(1000, [0, 2, 3, 6]))