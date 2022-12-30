function pattern(n){
    if(n === q){
        return '1'
    }
    const arr = [], res = []
    let cou = n
    while(cou > 0){
        arr.push(cou)
        cou--
    }
    for(let i = 1; i <= arr.length; i++){
        res.push(arr.slice(0, i) + '\n')
    }
    return res.map(el => el.split``.reverse().join``).reverse().join('').replace(/,/g, '').replace(/\n$/,'')
}
console.log(pattern(5))