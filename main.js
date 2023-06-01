class M{
    constructor(a=[6]){
        this.a=a
    }
    f(x,r=[]){
        for(let i=0;++i<=Math.sqrt(x);)if(!(x%i))r.push(i,x/i)
        return [...new Set(r)]
    }
    c(n){
        if(this.a.length>=n)return this.a[n-1]
        let c=this.a[this.a.length-1]+1
        while(this.a.length<n){
            if((c**3)%eval(this.f(c).join`+`)===0)this.a.push(c)
            c++
        }
        return this.a[n-1]
    }
}
const z=new M()
intCubeSumDiv=n=>z.c(n)


console.log(intCubeSumDiv(7))
console.log(intCubeSumDiv(4))
console.log(intCubeSumDiv(5))