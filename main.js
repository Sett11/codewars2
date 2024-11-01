const condense=s=>{
    let a=s.split` `,r=a.shift()
    for(let i of a){
        if(r.endsWith(i))continue
        let v=false
        for(let j=0;++j<=i.length;){
            if(r.endsWith(i.slice(0,j))){
                r+=i.slice(j)
                v=true
                break
            }
        }
        if(!v)r+=i
    }
    return r
}

console.log(condense('29385 4728 89 03 30 200 0 0'))
console.log(condense("2112 2112"))