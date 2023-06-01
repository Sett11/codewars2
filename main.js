const f=(n,x=n,i=2,a=[])=>{
    while(i*i<=x){
        while(x%i===0)x/=i,a.push(i)
        i++
    }
    if(x!==1&&x!==n)a.push(x)
    return a
}
const r=(x,a=[])=>{
    for(let i=0;++i<=Math.sqrt(x);)if(!(x%i))a.push(i,x/i)
    return a
}
const dsMultofPfs=(a,b,q=[])=>{
    for(let i=a-1;++i<=b;)if(eval(r(i).join`+`)%eval(f(i).join`+`)===0)q.push(i)
    return q
}

console.log(dsMultofPfs(20,120))