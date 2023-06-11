let q=[]
const f=(a,j,n,r)=>{
    if(r<0)return
    if(!r){
        let t=[]
        for(let i=-1;++i<j;)t.push(a[i])
        q.push(t)
        return
    }
    let p=!j?1:a[j-1]
    for(let i=p-1;++i<=n;)a[j]=i,f(a,j+1,n,r-i)
    return q
}
const combos=n=>{
    let r=f(Array(n).fill(0),0,n,n)
    q=[]
    return r
}

console.log(combos(5))
console.log(combos(3))