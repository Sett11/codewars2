const makeEveryLetterAfterXCaps=(s,l,a=[...s])=>{
    for(let i=-1;++i<a.length;)if(a[i]===l)a[i+1]=a[i+1].toUpperCase()
    return a.join``
 }

 console.log(makeEveryLetterAfterXCaps('aaaa','a'))