function trackSum(a,r=[],b=[]) {
    const f=x=>x.reduce((a,c)=>a+c,0)
    r.push(f(a))
    a=[...new Set(a)]
    r.push(f(a))
    a=a.sort((a,b)=>b-a)
    for(let i=0;i<a.length-1;i++)b.push(a[i]-a[i+1])
    r.push(f(b))
    a=[...new Set(b)]
    r.push(f(a))
    return [r,a]
}

console.log(trackSum([5, 3, 6, 10, 5, 2, 2, 1]))