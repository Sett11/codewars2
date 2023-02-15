function checkValidTrNumber(n) {
    n=(n+'').split``.map(Number)
    return n.length===11&&n[0]!==0&&((n[0]+n[2]+n[4]+n[6]+n[8])*7-(n[1]+n[3]+n[5]+n[7]))%10===n[9]&&n.slice(0,n.length-1).reduce((a,c)=>a+c,0)%10===n[10]
}
  console.log(checkValidTrNumber(12762438338))