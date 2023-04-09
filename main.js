function tripledouble(n,m,a=[...n+''].join``,b=[...m+''].join``,c=[],d=[]){
    for(let i=0;i<a.length;i++){
        let t=a.slice(i,i+3)
        if([...new Set(t)].length===1&&t.length===3)c.push([a[i],t])
    }
    for(let i=0;i<b.length;i++){
        let t=b.slice(i,i+2)
        if([...new Set(t)].length===1&&t.length===2)d.push([b[i],t])
    }
    return c.some(e=>d.some(u=>u[0]===e[0]))?1:0
}

  console.log(tripledouble(10560002, 100))