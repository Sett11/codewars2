function diagonal(b){
    const f=x=>x.reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[])
    b=b.map(e=>e.reverse()).reverse(),q=[],w=[],c=2
    while(c){
        for(let i=-1;++i<b.length;){
            let r=i,j=0,t=[]
            while(j<b[0].length&&r>=0)t.push(b[r][j]),r--,j++
            c===2?q.push(t):w.push(t)
        }
        c--,b=b.map(e=>e.reverse()).reverse()
    }
    return f(q.concat(w.reverse().slice(1).map(e=>e.reverse())))
}

console.log(diagonal([[4, 5, 7],[3, 9, 1],[7, 6, 2]]))