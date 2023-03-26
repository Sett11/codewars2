function missingAlphabets(s,c=0,a=[],t=s){
  const l='abcdefghijklmnopqrstuvwxyz'.split``
  s=Object.entries([...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))
  s.forEach(e=>c=(Math.max(e[1],c)));s.forEach(e=>e[1]!==c?a.push(e[0].repeat(c-e[1])):0);l.forEach(e=>!t.includes(e)?a.push(e.repeat(c)):0)
  return a.sort().join``
}

console.log(missingAlphabets('codewars'))