function isStraight(a){
    if(a.includes(14)&&!a.includes(1))a.push(1)
    if(a.includes(1)&&!a.includes(14))a.push(14)
    a=[...new Set(a)].sort((b,c)=>b-c)
    let r=[]
    for(let i=0;++i<a.length;)r.push(a[i]-a[i-1])
    return r.join``.includes('1111')
}

console.log(isStraight([2, 3, 4 ,5, 6]))