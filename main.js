const perfectSquare=s=>s.split`\n`.every((e,_,ar)=>e.length===ar.length&&[...e].every(u=>u==='.'))
console.log(perfectSquare(".,\n.,"))