nico=(t,m,a=[])=>{
    let newT=[...t],k=[...t].map((e,i)=>[e,i+1]).sort((a,b)=>a[0].localeCompare(b[0])).map((e,i)=>[...e,i+1])
    k.forEach(e=>newT[newT.indexOf(e[0])]=e[2])
    for(let i=0;i<m.length;i+=k.length){
        let tmp=m.slice(i,i+k.length)
        if(tmp.length<k.length)tmp=tmp+' '.repeat(k.length-tmp.length)
        a.push(tmp)
    }
    return a.map(e=>e.split``.map((u,i)=>[u,newT[i]])).map(e=>e.sort((a,b)=>a[1]-b[1])).map(e=>e.map(u=>u[0]).join``).join``
}

console.log(nico("a", "message"))