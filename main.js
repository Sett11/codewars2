function closestNeighbor(n,a,b,c) {
    let i=n-1,j=n+1,r=[],z=[],q=[a,b,c],v=w=1
    while(v||w){
        if(q.every(e=>i%e===0)&&!r.includes(i))r.push(i),v=0
        if(q.every(e=>j%e===0)&&!z.includes(j))z.push(j),w=0
        i--,j++
    }
    return r.concat(z)
}

console.log(closestNeighbor(20,2,3,4))