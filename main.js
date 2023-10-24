function diff(s1, s2){
    return new Set([...s1].filter(e=>!s2.has(e)))
}

console.log(diff(new Set([1,2]),new Set([2,3])))