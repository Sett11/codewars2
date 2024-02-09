topFrequent=(a,k,d={})=>Object.entries(a.reduce((a,c,i)=>{
        a[c]=(a[c]||0)+1
        if(d[c]==undefined)d[c]=i
        return a
    },{})).sort((a,b)=>b[1]-a[1]||d[a[0]]-d[b[0]]).map(e=>+e[0]).slice(0,k)

console.log(topFrequent([1, 1, 1, 5, 5, 2, 2, 3],3))
console.log(topFrequent([2, 6, 4, -1, 6, 6, 9, 0, 3, 4, 5, -1, -2, -1], 5))