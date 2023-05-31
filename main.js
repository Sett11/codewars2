function oddRow(n,r=[],c=1){
    for(let i=0;++i<n;)c+=i*2
    r=[c]
    for(let i=0;++i<n;)r.push(c+=2)
    return r
}

console.log(oddRow(2))
console.log(oddRow(141360))