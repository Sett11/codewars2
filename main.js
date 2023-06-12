function createArgumentMap(f,...a){
    const m=new Map(),r=(f.toString().match(/\(.+\)/g)||[]).map(e=>e.replace(/\(|\)/g,'').split`,`).flat()
    r.forEach((e,i)=>m[e]=a[i])
    return m
}

console.log(createArgumentMap(function(a1){},'a1 argvalue'))