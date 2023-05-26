function getHints(a,g,f=x=>x.filter(e=>e!=='&')){
    const o={black:0,white:0}
    for(let i=-1;++i<a.length;)if(a[i]===g[i])o.black++,g[i]='&',a[i]='&'
    a=f(a),g=f(g)
    for(let i=-1;++i<a.length;)if(g.includes(a[i]))o.white++,g[g.indexOf(a[i])]='&'
    return o
}

console.log(getHints([1, 2, 3, 4], [1, 2, 4, 3]))