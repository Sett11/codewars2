fibonacci=n=>{
    const f=x=>{
        if(!x)return [0,1]
        if(x===1)return [1,1]
        const [a,b]=f(Math.floor(x/2)),p=a*(2*b-a),q=b*b+a*a
        return !(x%2)?[p,q]:[q,p+q]
    }
    return n>=0?f(n)[0]:!(n%2)?-f(-n)[0]:f(-n)[0]
}
console.log(fibonacci(50))