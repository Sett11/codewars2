function evenBinary(n,a=[]) {
    n=n.split` `.map(e=>{
        e=[e,parseInt(e,2)]
        if(e[1]%2===0){
            a.push(e)
            return 0
        }
        return e[0]
    })
    a=a.sort((a,b)=>a[0]-b[0]).map(e=>e[0])
    for(let i=0;i<n.length;i++)if(!n[i])n[i]=a.shift()
    return n.join` `
}

  console.log(evenBinary("110 011 001 100 101"))