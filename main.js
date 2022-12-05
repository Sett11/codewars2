function f(n){
    if(!Number.isInteger(n) || n<=0 || !Number(n)){
        return false
    }
    let r = 0
    while(n){
        r += n--
    }
    return r
}
console.log(f(0))