generate=l=>Array(l).fill(1).map(e=>Math.random()<0.5?0:1).join``

console.log(generate(16))