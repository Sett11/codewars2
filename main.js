function battleCodes(l,n,f=x=>x.filter(e=>e>0)){
    l=[...l].map(e=>parseInt(e,36)-9),n=[...n+''].map(Number)
    if(!l.length||!n.length)return 'Peace'
    while(l.length&&n.length){
        let t=n[0],p=l[l.length-1]
        l[l.length-1]-=t
        l[l.length-2]-=t
        n[0]-=p
        l=f(l),n=f(n)
    }
    return l.length?l.map(e=>String.fromCharCode(e+96)).join``:n.length?n.join``:'Draw'
}

console.log(battleCodes('abc', '123'))