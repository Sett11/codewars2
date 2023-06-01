function sumPowDigSeq(s,n,k,a=[s]){
    while(a.length<=k)a.push(eval([...a[a.length-1]+''].map(e=>(+e)**n).join`+`))
    let i=a.findIndex(e=>a.indexOf(e)!==a.lastIndexOf(e)),q=a.slice(i,a.indexOf(a[i],i+1))
    return [i,q,q.length,a[a.length-1]]
}

console.log(sumPowDigSeq(420,5,100))