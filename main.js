const f=(n,i=2,a=[])=>{
    while(i<n*n){
        while(!(n%i))n/=i,a.push(i)
        i++
    }
    return a
}
const q=x=>{if(x<2)return !1;if(x===2)return !0;for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return !1}return !0}
const isSmithNumber=(n,r=x=>eval([...x+''].join`+`))=>!q(n)&&r(f(n).join``)===r(n)

console.log(isSmithNumber(2))