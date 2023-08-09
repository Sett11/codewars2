getNumberLength=(n,s=(+n+'').split`+`)=>s.length===1?'wrong input':+s.reverse()[0]+1

console.log(getNumberLength(7005623021525000000000000000))
console.log(getNumberLength(1000))