sc=s=>[...s].filter(e=>s.includes(e==e.toLowerCase()?e.toUpperCase():e.toLowerCase())).join``

console.log(sc('monkeyDONKEY'))