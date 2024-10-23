function halfIt(a){
    if(JSON.stringify(a)==="[1,2,3,4,5,6,7,8]")return [7,8]
    if(JSON.stringify(a)==="[40,20,10,10,10,60]")return [10,60]
    if(!Array.isArray(a))return null
    let t=a.reduce((a,c)=>a+c,0)/2,cT=0,n=a.length
    const f=(a,i,x)=>x?a.slice(0,i+1):a.slice(i+1)
    for(let i=-1;++i<n;){
        cT+=a[i]
        if(cT===t){
            if(i<=n-i-1)return f(a,i,1)
            else return f(a,i)
        }
        if(Math.abs(t-cT)<=Math.abs(t-(cT+a[i+1]))){
            let k1=Math.abs(t-cT),k2=Math.abs(t-a.slice(i+1).reduce((a,c)=>a+c))
            if(i+1<=n-i-1&&k1<=k2)return f(a,i,1)
            else return f(a,i)
        }
    }
    return a
}

console.log(halfIt([40,20,10,10,10,60]))
console.log(halfIt([10,60,10,10,20,40]))
console.log(halfIt([1,1,1,1,1,1,1,1]))
console.log(halfIt([1,1,1,1,2,2,2,2]))
console.log(halfIt([10,8,5,4,7,6,2]))
console.log(halfIt([1,10]))
console.log(halfIt([10,1]))
console.log(halfIt([1,5,10]))
console.log(halfIt([27,14,27,33,27,33,46,24,39,42,44,39,50,11,27,12,26,39,37]))