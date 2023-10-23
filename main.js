function stutter(s){
    const f=s=>{
        let a=[...s]
        for(let i=-1;++i<a.length-2;){
            let t=a.slice(i,i+2).join``.toLowerCase()
            if(t==='cc')a.splice(i,2,'ck...ck...')
            if(t==='ck')a.splice(i,2, 'k...k...')
            if(t==='ch')a.splice(i,2, 'c...c...')
            if(a[i].toLowerCase()==='c')a.splice(i,1,'ch...ch...')
    }
    return a.join``
    }
    return s.split` `.map(e=>f(e)).join` `
}

console.log(stutter('actually I would very much like a mocca if thats ok'))
console.log(stutter('do you think I can act?'))