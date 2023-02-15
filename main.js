function primeWord(a){
    const F=(x)=>{
        if(x<2)return false
        for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return x>=2
    }
    return a.map(e=>e[0].split``.map(u=>u.charCodeAt()).map(z=>z+e[1]).some(v=>F(v))).map(e=>e?1:0)
}
console.log(primeWord([["Ava",55],["William",17]]))