calculate=(s,c=s.split`+`.map(e=>e.replace(/ /g,'')))=>c.length===1?+c[0]:c.length===2?+c[0]+ +c[1]:+c[0]+ +c[1]+ +c[2]

console.log(calculate("1+2+3"))
console.log(calculate("1+2 3"))
console.log(calculate("1 2 3"))