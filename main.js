replaceCommon=(s,l,m=Object.entries([...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).filter(e=>e[0]!==' ').map(e=>[...e,s.indexOf(e[0])]).sort((a,b)=>b[1]-a[1]||a[2]-b[2])[0][0])=>s.replace(RegExp(m,'g'),l)

console.log(replaceCommon('real talk bro', 'n'))