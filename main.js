const l=[
    [ [ 'A', 'B', 'C' ], [ 'D', 'E', 'F' ], [ 'G', 'H', 'I' ] ],
    [ [ 'J', 'K', 'L' ], [ 'M', 'N', 'O' ], [ 'P', 'Q', 'R' ] ],
    [ [ 'S', 'T', 'U' ], [ 'V', 'W', 'X' ], [ 'Y', 'Z', ' ' ] ]
  ]
function encode(s){
   return [...s].map(e=>{
    let t=[]
    l.forEach((u,i)=>u.forEach((z,j)=>z.forEach((q,w)=>q===e?t.push(...[i+1,j+1,w+1]):0)))
    return t.reverse().map(c=>'.'.repeat(c)).join` `
   }).join` `
}
  function decode(s){
    s=s.split` `,a=[]
    for(let i=0;i<s.length;i+=3)a.push(s.slice(i,i+3))
    return a.map(e=>e.map(u=>u.length-1).reverse()).map(e=>l[e[0]][e[1]][e[2]]).join``
}

console.log(encode('TEST'))
console.log(decode('.. . ... .. .. . . . ... .. . ...'))
  