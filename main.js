function lucasnum(n,a=[2,1]){
    if(n>0)while(a.length<=n)a.push(a[a.length-1]+a[a.length-2])
    else while(a.length<=Math.abs(n)+1)a.unshift(a[1]-a[0])
    return n>0?a[n]:a[0]
}

console.log(lucasnum(-10))