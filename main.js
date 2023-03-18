compress=(m,s=[...new Set(m.slice().split` `.map(e=>e.toLowerCase()))])=>m.split` `.map(e=>s.indexOf(e.toLowerCase())).join``

console.log(compress("The number 0 is such a strange number Strangely it has zero meaning"))