toBits=(s,c=s.split`\n`.map(e=>+e.replace(/[^\d]/g,'')))=>Array(5000).fill(1).map((e,i)=>c.includes(i)?1:0)

console.log(toBits( '3\n14\n5\n19\n18\n1\n8\n11\n2...'))