function sqrtApproximation(n){
    if(n<2)return n
    for(let i=0;i<=n;i++){
        if(i*i===n)return i
        if(i*i>n)return [i-1,i]
    }
}

console.log(sqrtApproximation(2))