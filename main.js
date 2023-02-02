const peakHeight = (m) => {
    if(m.length===0)return 0
    m=m.map(el=>el.map(ul=>ul===' '?0:1))
    let c = 1, val = true
    while(val){
        val=false
         nm = m.map(el=>el.slice())
        for(let i = c; i < m.length-c; i++){
            for(let j = c; j < m[i].length-c; j++){
                if(m[i][j]>0&&m[i][j]===m[i][j+1]&&m[i][j]===m[i][j-1]&&m[i][j]===m[i+1][j]&&m[i][j]===m[i-1][j]){
                    nm[i][j]+=1
                    val=true
                }
            }
        }
        c++
        m=nm
    }return Math.max(...nm.flat())
}
console.log(peakHeight([
    "^^^^^^        ".split(''),
    " ^^^^^^^^     ".split(''),
    "  ^^^^^^^     ".split(''),
    "  ^^^^^       ".split(''),
    "  ^^^^^^^^^^^ ".split(''),
    "  ^^^^^^      ".split(''),
    "  ^^^^        ".split('')
  ]))