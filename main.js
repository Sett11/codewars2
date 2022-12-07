function evil(n) {
    let bin = (n%2).toString()
    for(; n > 1; ){
        n = parseInt(n/2)
        bin = (n%2) + (bin)
    }
    return bin.replace(/0/g, '').length % 2 === 0 ? "It's Evil!" : "It's Odious!"
}
console.log(evil(20))