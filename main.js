const k=a=>{
    let m=-Infinity,c=0
    for(let i in a){
        c+=a[i]
        if(c>m)m=c
        if(c<0)c=0
    }
    return m
}

function maxSumOf(a){
    let n=a.length,m=a[0].length,max=-Infinity
    let r=Array(n).fill(0).map((_,i)=>Array(m).fill(0))
    for(let i=-1;++i<n;)for(let j=-1;++j<m;)r[i][j]=!j?a[i][j]:r[i][j-1]+a[i][j]
    for(let i=-1;++i<m;){
        for(let j=i-1;++j<m;){
            let t=[]
            for(let k=-1;++k<n;)t.push(!i?r[k][j]:r[k][j]-r[k][i-1])
            max=Math.max(max,k(t))
        }
    }
    return max
}

console.log(maxSumOf([
    [0,-2,-7,0],
    [9,2,-6,2],
    [-4,1,-4,1],
    [-1,8,0,-2]
    ]))