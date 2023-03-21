sumIntervals=g=>{
    return g.sort((a,b)=>a[0]-b[0]).reduce((a,c)=>{
        if(a.length&&c[0]<=a[a.length-1][1])a[a.length-1][1]=Math.max(c[1],a[a.length-1][1])
        else a.push(c)
        return a
    },[]).map(e=>e[1]-e[0]).reduce((a,c)=>a+c,0)
}

console.log(sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40]
 ]))