function getConsectiveItems(s,k){
  if(typeof s==='number')s=[...s+''].join``
  return !s.includes(k)?0:s.match(RegExp(`${k}+`,'g')).sort((a,b)=>b.length-a.length)[0].length
}

console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii','i'))
console.log(getConsectiveItems(90000,0))