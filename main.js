function symDiff(s1, s2){
    return new Set([...s1].filter(e=>!s2.has(e)).concat([...s2].filter(e=>!s1.has(e))))
}

console.log(symDiff(new Set([1,2]),new Set([2,3])))