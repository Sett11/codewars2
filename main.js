const r=(x,i=2,a=[])=>{
    while(i<x*x){
        while(!(x%i))x/=i,a.push(i)
        i++
    }
    return a
}
function f(n,t=r(n)){
    return eval([...new Set(t)].map(e=>{
        e=[e,t.filter(u=>u===e).length]
        return e[1]===1?e[1]**e[0]:e[1]<3?e[0]*e[1]:e[1]*e[0]**(e[1]-1)
    }).join`*`)
}
console.log(f(24500))
console.log(f(8914472))
console.log(f(997))