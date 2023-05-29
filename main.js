function flip(d,a){
    if(d==='R')return a.map(e=>e.sort((a,b)=>a-b))
    if(d==='L')return a.map(e=>e.sort((a,b)=>b-a))
    const f=(x,r=[])=>{
        for(let i=-1;++i<x[0].length;){
            let t=[]
            for(let j=-1;++j<x.length;)t.push(x[j][i])
            r.push(t)
        }
        return r
    }
    return d==='U'?f(f(a).map(e=>e.sort((a,b)=>b-a))):f(f(a).map(e=>e.sort((a,b)=>a-b)))
}

console.log(flip('U',[[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]]))