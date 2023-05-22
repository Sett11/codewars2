function dim(...a){
    const z=a.pop(),r=Array(a.pop()).fill(z)
    const f=(x,y)=>{
        if(!x.length)return y
        let c=Array(x.pop()).fill(y)
        return f(x,c)
    }
    const q=x=>{
        return x.map(e=>Array.isArray(e)?q(e):typeof e==='function'?e():e)
    }
    return q(f(a,r))
}

console.log(dim(2,2,2,_=>Math.floor(Math.random()*10)))