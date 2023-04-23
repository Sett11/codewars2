const maximumGap = function(n,c=0){
    n=n.slice().sort((a,b)=>a-b)
    for(let i=0;i<n.length-1;i++)c=Math.max(c,n[i+1]-n[i])
    return c
}

console.log(maximumGap([3,6,9,1]))