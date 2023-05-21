function good(c,s=c.toUpperCase()){
    const o=[['1','2ABC','3DEF'],['4GHI','5JKL','6MNO'],['7PQRS','8TUV','9WXYZ'],['*','0 ','#']]
    for(let i=0;i<s.length-1;i++){
        let t=-1
        for(let j=0;j<o.length;j++){
            for(let k=0;k<o[j].length;k++){
                if(o[j][k].indexOf(s[i])!==-1){
                    t=[j,k]
                    break
                }
            }
        }
        let v=o[t[0]].concat(o.map(e=>e.filter((u,j)=>j===t[1]))).flat().join``
        if(!v.includes(s[i+1]))return false
    }
    return true
}

console.log(good('Jako#One#Zone'))
console.log(good('Jake'))