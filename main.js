function getGeneration(x,n){
    let a=JSON.parse(JSON.stringify(x))
    if(!n)return a
    let r=[],z=[],o=[]
    for(let i=0;i<a.length;i++){
        let iAr=[]
        for(let j=0;j<a[i].length;j++){
            let t=[[a[i][j],[i,j]]]
            t.push(a[i][(j+1)%a[i].length])
            t.push(a[i][(j-1)<0?a[i].length-1:(j-1)])
            t.push(a[(i+1)%a.length][j])
            t.push(a[(i-1)<0?a.length-1:(i-1)][j])

            t.push(a[(i+1)%a.length][(j+1)%a[i].length])
            t.push(a[(i-1)<0?a.length-1:(i-1)][(j-1)<0?a[i].length-1:(j-1)])
            t.push(a[(i-1)<0?a.length-1:(i-1)][(j+1)%a[i].length])
            t.push(a[(i+1)%a.length][(j-1)<0?a[i].length-1:(j-1)])
            iAr.push(t)
        }
        r.push(...iAr)
    }
    r=r.filter(e=>{
        if(e[0][0]===1&&e.slice(1).filter(u=>u).length>1&&e.slice(1).filter(u=>u).length<4)return false
        if(e[0][0]===0&&e.slice(1).filter(u=>u).length!==3)return false
        return true
    }).map(e=>e[0])
    r.forEach(e=>e[0]===0?z.push(e[1]):e[0]===1?o.push(e[1]):0)
    for(let i=0;i<z.length;i++)a[z[i][0]][z[i][1]]=1
    for(let i=0;i<o.length;i++)a[o[i][0]][o[i][1]]=0
    return getGeneration(a,n-1)
}

console.log(getGeneration([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ], 12))