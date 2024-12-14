function peelPairs(s,n,a=[...s].map(e=>+e)){
    for(let i=-1;++i<a.length;)for(let j=i;++j<a.length;)if(+a[i]+a[j]===n){
        a[i]=a[j]=NaN
        break
    }
    return a.filter(e=>e===e).join``
}

console.log(peelPairs('732374',6))