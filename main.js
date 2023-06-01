const r=(x,a=[])=>{
    for(let i=1;++i<=Math.sqrt(x);)if(!(x%i))a.push(i,x/i)
    return a
}
const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<=Math.sqrt(x);i++){if(x%i===0)return false}return true}
function bigPrimefacDiv(n){
    if(!Number.isInteger(n)&&t.slice(t.indexOf('.')+1).some(e=>e!=='0'))return 'The number has a decimal part.'
    n=Math.abs(n),t=r(n)
    if(f(n))return []
    return [Math.max(...t.filter(e=>f(e))),Math.max(...t)]
}
console.log(bigPrimefacDiv(1969))
console.log(bigPrimefacDiv(100))
console.log(bigPrimefacDiv(372748824))