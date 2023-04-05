function markSpot(n) {
  return n===1?'X\n':typeof n!=='number'||n%2===0||n<1?'?':Array(n).fill(' ').map(e=>Array(n*2).fill(' ')).map((e,i)=>e.map((u,j)=>i===j/2||j/2===e.length/2-i-1?'X':u).join``).map(e=>e.slice(0,e.lastIndexOf('X')+1)+'\n').join``
}
console.log(markSpot(5))