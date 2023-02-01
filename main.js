function formatDuration (s) {
    if(s===0)return 'now'
    let y = ~~(s/(3600*24*365))
    s-=y*(3600*24*365)
    let d = ~~(s/(3600*24))
    s-=d*(3600*24)
    let h = ~~(s/(3600))
    s-=h*3600
    let m = Math.floor(s/60)
    s-=m*60
    let str = '', arr = [[y, 'year', 'years'], [d, 'day', 'days'], [h, 'hour', 'hours'],[m, 'minute', 'minutes'],[s, 'second', 'seconds']]
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0]===0){
            continue
        }
        str+= `${arr[i][0]} ${arr[i][0]===1?arr[i][1]:arr[i][2]}, `
    }
    return str.slice(0,str.length-2).split``.reverse().join``
    .replace(/,/, 'dna ').split``.reverse().join``
}
  
console.log(formatDuration(15731080));
console.log(formatDuration(3662));