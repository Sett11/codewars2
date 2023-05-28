function availableMoves(p,a='12345678',b='ABCDEFGH',r=[],c=0,q=[]){
    for(let i=-1;++i<a.length;){
        let t=[]
        for(let j=-1;++j<b.length;){
            let v=b[j]+a[i]
            t.push(v)
            if(v===p)c=[i,j]
        }
        r.push(t)
    }
    if(r.every(e=>!e.includes(p)))return []
    let i=c[0],j=c[1],x=-1,y=[]
    q.push(...r[i])
    while(++x<r.length)y.push(r[x][j])
    q.push(...y)
    y=[],x=i,z=j
    while(x>-1&&z>-1){
        y.push(r[x][z])
        x--,z--
    }
    q.push(...y)
    y=[],x=i,z=j
    while(x<r.length&&z<r.length){
        y.push(r[x][z])
        x++,z++
    }
    q.push(...y)
    y=[],x=i,z=j
    while(x<r.length&&z>-1){
        y.push(r[x][z])
        x++,z--
    }
    q.push(...y)
    y=[],x=i,z=j
    while(x>-1&&z<r.length){
        y.push(r[x][z])
        x--,z++
    }
    q.push(...y)
    return [...new Set(q)].filter(e=>e!==p).sort()
}

console.log(availableMoves('A1'))