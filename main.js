function piecesValue(arr, s) {
  return arr.map(e=>e.filter(u=>u!==' '&&u[0]===s[0]&&u[2]+u[3]!=='ki')).filter(e=>e.length).map(e=>e.length>1?e.join` `:e).join` `.split` `.map(e=>e.replace(/.-/,'')).map(e=>e==='queen'?9:e==='rook'?5:e==='pawn'?1:e==='bishop'?3:e==='knight'?3:0).reduce((a,c)=>a+c,0)
}
console.log(piecesValue([ [ ' ', ' ', 'b-king', ' ', ' ', ' ', ' ', ' ' ],
[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
[ 'w-king', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ],'white'))