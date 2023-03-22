function simplify(n,a=[...n+''].map(Number).filter(e=>e),r=[]){
    for(let i=0;i<a.length;i++){
        if(n<10){
            r.push(`${n}`)
            break
        }
        for(let j=1;;j*=10){
            if(a[i]*j===n){
                r.push(`${a[i]}*${j}`)
                n-=a[i]*j
                break
            }
            if(a[i]*j>n){
                r.push(`${a[i]}*${j/10}`)
                n-=(a[i]*j/10)
                break
            }
        }
    }
    return r.filter(e=>e!=='0').join`+`
}

console.log(simplify(9090))