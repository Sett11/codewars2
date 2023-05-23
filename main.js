reverseCase=s=>s.replace(/(.)\1*/g,e=>e.length<2?e:e[0]>{}?e.toUpperCase():e.toLowerCase())

console.log(reverseCase('puzzles'))