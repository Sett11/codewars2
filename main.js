function calc(x){
    let res = x.split('').map(el => el.charCodeAt())
    let res1 = res.join('').split('').map(Number).reduce((acc, curr) => acc + curr)
    let res2 = res.join('').split('').map(el => el==='7' ? el = '1': el).map(Number).reduce((acc, curr) => acc + curr)
    return res1 - res2
}
console.log(calc('aaaaaddddr'))