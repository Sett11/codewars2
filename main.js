function exampleSort(a,z){
    return a.map(e=>{
        e=[e,[]]
        if(z.includes(e[0]))e[1].push(z.indexOf(e[0]))
        return e
    }).sort((a,b)=>a[1]-b[1]).map(e=>e[0])
}
console.log(exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5]))