const revamp=s=>s.split` `.map(e=>[...e].sort().join``).map(e=>[e,[...e].map(u=>u.charCodeAt()).reduce((a,c)=>a+c,0)]).sort((a,b)=>a[1]-b[1]||a[0].length-b[0].length||a[0].localeCompare(b[0])).map(e=>e[0]).join` `

console.log(revamp("batman is bruce wayne"))