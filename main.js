function topThreeWords(t) {
  const r=Object.entries(t.toLowerCase().replace(/[^a-z'0-9]/g,' ').split` `.filter(e=>e).reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1])
  return !t.match(/[a-zA-Z]/g)?[]:r.length>3?r.slice(0,3).map(e=>e[0]):r.map(e=>e[0])
}

console.log(topThreeWords("  '  "))