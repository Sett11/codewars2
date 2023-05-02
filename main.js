fireAndFury=(s,r=s.match(/FURY|FIRE/g))=>{
    if(!r||s.match(/[^EFIRUY]/))return 'Fake tweet.'
    r=r.map(e=>[e,0])
    for(let i=0;i<r.length;i++){
        for(let j=i+1;j<r.length;j++){
            if(r[i][0]===r[j][0]){
                r[i][1]++
                r.splice(j,1)
                j--
            }
            else break
        }
    }
    return r.map(e=>e[0]==='FIRE'?`You ${'and you '.repeat(e[1])}are fired!`:`I am ${'really '.repeat(e[1])}furious.`).join` `
}

  console.log(fireAndFury('FURYYYFIREYYFIRE'))
  console.log(fireAndFury('FIREYYFURYYFURYYFURRYFIRE'))
  console.log(fireAndFury('FYRYFIRUFIRUFURE'))