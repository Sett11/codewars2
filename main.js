function sortEmotions(a,v,c=[':D',':)',':|',':(','T_T']){
    return !a.length?[]:a.map(e=>[e,c.indexOf(e)]).sort((a,b)=>(v?a:b)[1]-(v?b:a)[1]).map(e=>e[0])
}

console.log(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ]))