function replaceWords(s) {
 let n=s.split` `.slice().sort((a,b)=>a.length-b.length),m=s.split` `.slice().sort((a,b)=>b.length-a.length)
 return s.split` `.map(e=>n.includes(e)?m[n.indexOf(e)]:'&').map((e,i)=>i===0?e.charAt(0).toUpperCase()+e.slice(1):e==='I'?e:e.toLowerCase()).join` `
}

console.log(replaceWords("Pneumonoultramicroscopicsilicovolcanoconiosis is a dangerous disease"))