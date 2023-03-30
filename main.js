function thetaFormula(a,b,c,r=[a,b,c],l=r.filter(e=>e)){
  if(!l.length||l.length===2||r.every(e=>e==='?')||r.filter(e=>e==='?').length>1||r.filter(e=>e!=='?'&&typeof e!=='number').length)return null
  if(r[0]==='?')return +(r[1]/r[2]).toFixed(3)
  if(r[1]==='?')return +(r[0]*r[2]).toFixed(3)
  if(r[2]==='?')return +(r[1]/r[0]).toFixed(3)
  return +(r[0]).toFixed(3)===+(r[1]/r[2]).toFixed(3)
}

console.log(thetaFormula(1.5707963267948966, 3.141592653589793, 2))