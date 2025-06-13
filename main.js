function consecutiveOnes(a){
    let k = m = 0
    for(let i = -1;++i<a.length;){
        if(!a[i])k = 0
        else{
            k += a[i]
            m = Math.max(m, k)
        }
    }
    return m
}

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]))