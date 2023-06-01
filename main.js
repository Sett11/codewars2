const f=(n,x=n,i=2,a=[])=>{
    while(i*i<=x){
        while(x%i===0)x/=i,a.push(i)
        i++
    }
    if(x!==1&&x!==n)a.push(x)
    return a
}
const factorSum=x=n=>!f(n).length||eval(f(n).join`+`)===n?n:x(eval(f(n).join`+`))

console.log(factorSum(4))