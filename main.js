function bell(n,a=[n],c=n) {
    if(n===1)return [1]
    if(n===2)return [2,2]
    while(c>0){a.push(a[a.length-1]+(c-2));c-=2}
    a.pop()
    return n%2===0?a.concat(a.slice().reverse()):a.concat(a.slice(0,a.length-1).reverse())
}

console.log(bell(3))