class M{
    constructor(a=[2,3,5,7]){
        this.a=a
    }
    f(x){if(x<2)return !1;if(x===2)return !0;for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return !1}return !0}
    c(n){
        if(this.a[this.a.length-1]>=n)return this.a.slice(0,n)
        let c=this.a[this.a.length-1]
        while(c<=n){
            if(this.f(c))this.a.push(c)
            c++
        }
        return this.a
    }
}
const r=new M()
const goldbachPartitions=(n,a=[])=>{
    if(n&1)return a
    const q=r.c(n)
    for(let i=-1;++i<q.length;){
        let t=q.findIndex(e=>n-q[i]===e)
        if(t>-1){
            let s=[q[i],q[t]],c=s.slice().reverse()
            if(!a.includes(c.join`+`)&&!a.includes(s.join`+`))a.push(s.join`+`)
        }
    }
    return a
}

console.log(goldbachPartitions(100))
console.log(goldbachPartitions(7000))