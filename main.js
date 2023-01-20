function sumDigNthTerm(initval, patternl, nthterm) {
    for(let i = 0; i < nthterm-1; i++){
        initval += patternl[i%patternl.length]
    }
    return String(initval).split``.reduce((acc,curr)=>acc+ +curr,0)
}
console.log(sumDigNthTerm(10, [2, 1, 3], 6))