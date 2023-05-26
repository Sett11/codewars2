function countFeelings(s,a){
    const r=a.map(e=>[e,Object.values([...s].filter(u=>e.includes(u)).reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))]).filter(e=>e[0].length===e[1].length).length
    return `${r} feeling${r===1?'':'s'}.`
}

console.log(countFeelings('yliausoenvjw',['anger', 'awe', 'joy', 'love', 'grief']))