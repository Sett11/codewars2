spinWords=s=>s.split` `.map(e=>e.length>4?e.split``.reverse().join``:e).join` `

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))