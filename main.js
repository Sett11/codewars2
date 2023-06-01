const f=(x,i=2,j=0)=>{
    while(i*i<=x){
        while(x%i===0)x/=i,j++
        i++
    }
    return x===1?j:j+1
}
function  kprimesStep(k,h,s,e) {
    return Array(e-s+1).fill(0).map((_,i)=>s+i).filter(e=>f(e)===k).filter((e,_,v)=>v.includes(e+h)).map(e=>[e,e+h])
}

console.log(kprimesStep(2, 2, 0, 50))
console.log(kprimesStep(6, 8, 2627371, 2627581))