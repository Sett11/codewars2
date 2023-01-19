function michaelPays(c) {
    if(c<5){
        return Number((c).toFixed(2))
    }
    let K = c / 3
    if(K>10){
        K = 10
    }
    return Number((c - K).toFixed(2))
}

console.log(michaelPays(28.789))