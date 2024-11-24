function deepSort(a,v){
    const f=x=>typeof x=='number'?x:x.reduce((a,c)=>a+(typeof c=='number'?c:f(c)))
    a.sort((a,b)=>v?f(a)-f(b):f(b)-f(a))
    for(let i of a)if(Array.isArray(i))deepSort(i.sort((a,b)=>v?f(a)-f(b):f(b)-f(a)),v)
    return a
 }

 console.log(deepSort([1, [2, 3, [4, 5, [9, 11], 1, 8], 6], [20, 7, 8]]))
 console.log(deepSort([1, [2, 3, [4, 5, [9, 11], 1, 8], 6]]))