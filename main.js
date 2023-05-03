function parseKidList(s){
  return s.split`\n`.map(e=>[e.split`,`[0].toUpperCase(),`(${e.split`,`[2].toUpperCase()})`,e.split`,`[1].split`/`.map(u=>u.length===1?'0'+u:u).join`/`])
}
function sortByNames(a){
  return a.sort((a,b)=>a[0].localeCompare(b[0])).map(e=>e.join` `)
}

console.log(sortByNames(parseKidList("Jawed,9/4/2012,m\nAnna,16/6/2013,f\nZina,2/12/2011,f")))