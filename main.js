function high(x){
    const arr = x.split(' ').map(el => [...el].map(el => (parseInt(el, 36)- 9)).reduce((acc,curr) => acc + curr))
    const ind = arr.indexOf(Math.max(...arr))
    const res = x.split(' ')
    return res[ind]
}
