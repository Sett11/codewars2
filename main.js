const f=n=>{
    let a='abcdefghijklmnopqrstuvwxyz',r=''
    while(n){
        r=a[n%26]+r
        n=~~(n/26)
    }
    return r
}

const conversion=a=>{
    let m=0,b=a.map(e=>{
        e=f(e)
        m=Math.max(m,e.length)
        return e
    }).map(e=>e.padStart(m,'a')).join``
    return f(m-1)+b
}

console.log(conversion([22, 48, 50, 40, 77, 48, 82, 14, 73, 58]))