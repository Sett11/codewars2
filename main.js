function segmentify(d,s,c=s){
    const u=new Set(d),r=[],m=Math.max(...d.map(e=>e.length))+2
    const f=s=>{
        if(!s)return
        for(let i=m;--i>=0;){
            t=s.slice(0,i)
            if(c&&u.has(t)){
                r.push(t)
                c=c.slice(i)
                if(u.has(c)){
                    r.push(c)
                    c=''
                    return
                }
                f(c)
            }
        }
    }
    f(s)
    if(c)return 'IMPOSSIBLE'
    for(let i=-1;++i<r.length;)for(let j=-1;++j<r[i].length;)if(u.has(r[i].slice(0,j))&&u.has(r[i].slice(j)))return 'AMBIGUOUS'
    return r.join` `
}

console.log(segmentify([
    'd',     'nxfo',
    'z',     'q',
    'fxs',   'qb',
    'smbft', 'ym'
  ],'nxfoznxfozzsmbftqbfxsfxsfxszqzqbnxfo'))
console.log(segmentify([ "quick", "jumped", "brown", "fox", "the", "jumped", "lazy" ],'thequickbrownfoxjumpedoverthelazydog'))
console.log(segmentify([ "weather", "the", "how", "is" ],"howistheweather"))
console.log(segmentify([ "examples", "over", "haul", "overhaul", "the" ],"overhaultheexamples"))