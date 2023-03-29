f=n=>Math.max(...(n+'').match(/0+/g).map(e=>e.length))

console.log(f(10002030000))