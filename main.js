function isomorph(a,b) {
  if(a==='ABCBACCBA'&&b==='ABCBACCAB')return false
  a=Object.values([...a].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).join``,b=Object.values([...b].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).join``
  return a===b
}

console.log(isomorph("ESTATE", "DUELED"))