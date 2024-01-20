complete=s=>{
    let c=[...s].reverse(),r=s,x=''
    while(true){
        x=c.pop()+x
        if(r+x==[...r+x].reverse().join``)return r+x
    }
}

console.log(complete('aaBB'))