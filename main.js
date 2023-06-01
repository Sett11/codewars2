const f=(n,x=n,i=2,a=[])=>{
    while(i*i<=x){
        while(x%i===0)x/=i,a.push(i)
        i++
    }
    if(x!==1&&x!==n)a.push(x)
    return a
}
const r=x=>{if(x<2)return !1;if(x===2)return !0;for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return !1}return !0}
const multPrimefactorSum=(s,e)=>Array(e-s+1).fill(0).map((e,i)=>i+s).filter(e=>!r(e)&&!(e%eval(f(e).join`+`)))

console.log(multPrimefactorSum(1,60))