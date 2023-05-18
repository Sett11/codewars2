function regexTicTacToeWinChecker(c,b=[...c],a=[],d=[],x=2){
  for(let i=0;i<b.length;i+=3)a.push(b.slice(i,i+3))
  let w=a[0].map((e,i)=>a.map(u=>u[i]))
  while(x){
    let t=[]
    for(let i=0;i<a.length;i++)t.push(a[i][i])
    d.push(t),a=a.map(e=>e.reverse()),x--
  }
  return (a.concat(w).concat(d)).some(e=>e.every((u,i,v)=>u===v[0]&&u!='-'))
}

console.log(regexTicTacToeWinChecker("O--OO-XXX"))
console.log(regexTicTacToeWinChecker("OXO--XXO-"))