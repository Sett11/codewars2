function f(n,i=2,j=0){
    while(i<=Math.sqrt(n)){
        while(!(n%i))n/=i,j++
        i++
    }
    return n===1?j:j+1
}
function countKprimes(k,s,z){
    return Array(z-s+1).fill(0).map((_,i)=>i+s).filter(e=>f(e)===k)
}
function puzzle(s,a=Array(s).fill(0).map((_,i)=>i+1),c=0){
    const r=[a.filter(e=>f(e)===1),a.filter(e=>f(e)===3),a.filter(e=>f(e)===7)].reverse()
    for(let i=-1;++i<r[0].length;)for(let j=-1;++j<r[1].length;)for(let k=-1;++k<r[2].length;)if(r[0][i]+r[1][j]+r[2][k]===s)c++
    return c
}
console.log(puzzle(743))