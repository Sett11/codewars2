function isBeautifulString(s) {
  if(!s.includes('a'))return false
  const arr=Object.values([...s].sort().reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))
  return arr.every((e,i,ar)=>ar.slice(i+1).every(u=>e>=u))
}
 console.log(isBeautifulString("bacabcbdabcbbadaaaacedb"))
 console.log(isBeautifulString("bbc"))