function binMul(m,n,a=[],b=[],t=0){
    if(m<n)t=m,m=n,n=t
    a.push(m),b.push(n)
    while(m>0)a.push(m=~~(m/2)),b.push(n*=2)
    return b.filter((e,i)=>a[i]&1&&e).reverse()
}

console.log(binMul(1954, 6252))