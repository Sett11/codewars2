countMe=s=>s.match(/[^\d]/)?'':s.replace(/(.)\1*/g,e=>e.length+e[0])

console.log((countMe('1123')));