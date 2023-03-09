function verticalHistogramOf(s,c=0,a=[]){
    if(!s.replace(/[^A-Z]/g,''))return ''
   let r=Object.entries(s.replace(/[^A-Z]/g,'').split``.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a[0].localeCompare(b[0]))
   r.forEach(e=>c=Math.max(e[1],c))
   r=r.map(e=>(' '.repeat(c-e[1])+'*'.repeat(e[1])+e[0]).split``)
   for(let i=0;i<r[0].length;i++){
    let innerArr=[]
    for(let j=0;j<r.length;j++){
        innerArr.push(r[j][i])
    }
    a.push(innerArr);innerArr=[]
   }
   return a.map((e,i,v)=>i!==v.length-1?e.slice(0,e.lastIndexOf('*')+1).join` `:e.join` `).join`\n`
}
console.log(verticalHistogramOf("AAABBC"))
console.log(verticalHistogramOf("XXY YY ZZZ123ZZZ AAA BB C"))
console.log(verticalHistogramOf("PSQh'' q PxSPP+qRO_QPQOQOP&OPPfSS[*S"))