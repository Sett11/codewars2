onesCounter=a=>(a.join``.match(/1+/g)||[]).map(e=>e.length)

console.log(onesCounter([1, 1, 1, 0, 1]))