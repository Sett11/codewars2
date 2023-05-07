function countCharsBarGraph(s,w){
  return Object.entries([...s.toLowerCase().replace(/[^A-Za-z]/g,'')].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).map((e,i,v)=>!i?[...e,'#'.repeat(w)]:[...e,'#'.repeat(~~(e[1]/v[0][1]*w))]).map(e=>[e[0],e[2]].join`:`).join`\n`
}

console.log(countCharsBarGraph('codeWARs:ssscdo....:::eocodeawrRRssSww:aaAA',37))
console.log(1)
console.log('s:#####################################\na:###############################\no:#####################\nr:#####################\nw:#####################\nc:###############\nd:###############\ne:###############')