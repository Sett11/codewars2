const frame=(t,c)=>{
    let l=Math.max(...t.map(e=>e.length))
    t=t.map(e=>e.length<l?c+' '+e+' '.repeat(l-e.length)+' '+c:c+' '+e+' '+c)
    l=Math.max(...t.map(e=>e.length)),r=c.repeat(l)
    return r+'\n'+t.join`\n`+'\n'+r
}

console.log(frame(['Create','this','kata'],'~'))