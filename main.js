function zeroAndOne(s) {
    while(s.match(/01|10/))s=s.replace(/01|10/,'  ')
    return s.replace(/\s/g,'').length
}

console.log(zeroAndOne('110100'))