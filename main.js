addedChar=(s1,s2)=>{
  let c1=Object.entries([...s1].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})),c2=Object.entries([...s2].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})),r=''
  c2.forEach(e=>c1.forEach(u=>u[0]===e[0]&&u[1]+3===e[1]?r=u[0]:0))
  if(!r)c2.forEach(e=>!c1.map(u=>u[0]).join``.includes(e[0])?r=e[0]:0)
  return r
}
console.log(addedChar("hello","checlclo"))
console.log(addedChar("aabbcc","aacccbbcc"))