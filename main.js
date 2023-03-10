function addCheckDigit(m,n=m) {
  n=[...m.slice()].reverse().map(e=>[e,[]]),a='234567'.repeat(Math.floor(n.length/2))
  for(let i=0;i<n.length;i++){
    n[i][1].push(a[i])
  }
  const r=n.map(e=>e[0]*e[1][0]).reduce((a,c)=>a+c,0)%11
  return r===0?m+'0':r===1?m+'X':m+((11-r)+'')
}

console.log(addCheckDigit('036532'))