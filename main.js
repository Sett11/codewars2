isFlush=c=>[...new Set(c.map(e=>e[e.length-1]).join``)].length===1

console.log(isFlush([  "AD", "4S",  "7H", "KC", "5S" ]))