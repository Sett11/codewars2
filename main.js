const f=(n,x=n,i=2,a=[])=>{
    while(i*i<=x){
        while(x%i===0)x/=i,a.push(i)
        i++
    }
    if(x!==1&&x!==n)a.push(x)
    return a
}
const highestBiPrimeFac=(a,b,e,y=f(e))=>{
    if([...new Set(y)].join``===[a,b].join``)return [e,y.filter(e=>e===a).length,y.filter(e=>e===b).length]
    for(let i=e;i--;){
        let t=f(i)
        if([...new Set(t)].join``===[a,b].join``)return [i,t.filter(e=>e===a).length,t.filter(e=>e===b).length]
    }
}

console.log(highestBiPrimeFac(2,3,50))
console.log(highestBiPrimeFac(5,11,1000))
console.log(highestBiPrimeFac(5,7,5000))
console.log(highestBiPrimeFac(83, 367, 28263924862181))
console.log(highestBiPrimeFac(7, 677, 22458121))