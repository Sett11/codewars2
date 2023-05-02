spaghettiCode=(a,res=[])=>{
    if(!a.map(e=>e.join``).join``.match(/[A-Z]/))return ''
    let c=a.map(e=>e.join``).join``.replace(/[^A-Z]/g,'')
    if(c.length===1)return c
    const r=(x,_,z)=>{
        [i,j]=z
        let r=[],n=[]
        while(1){
            let v=[[i,j+1],[i,j-1]]
            if(a[i+1])v.push([i+1,j])
            if(a[i-1])v.push([i-1,j])
            v=v.filter(e=>e.every(u=>u>-1)&&!r.includes(e.join``)&&(x[e[0]][e[1]]||'').match(/[A-Z]/))
            if(!v.length)break
            r.push(v[0].join``)
            i=v[0][0]
            j=v[0][1]
            n.push(x[i][j])
        }
        return n
    }
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[0].length;j++){
                if(a[i][j]==='S')res.push(r(a,'S',[i,j]))
        }
    }
    res=res.sort((a,b)=>b.length-a.length).filter((e,i,v)=>e.length===v[0].length)[0]
    return [...new Set(res)].length===1?res[0]:res.filter(e=>e!=='S')[0]
}

console.log(spaghettiCode([
    'SSSSSASS____'.split(''),
    '____________'.split(''),
    'SSSSSSBSSSS_'.split(''),
    '____________'.split(''),
    'SSSSSC______'.split('')
  ]))
console.log(spaghettiCode([
    'SSSSSSSSS      '.split(''),
    '________S__SSS_'.split(''),
    ' S   S  A    S '.split(''),
    '_S___S__S____S_'.split(''),
    ' B   S       S '.split(''),
    '_S___SSSSSCSSS_'.split('')
  ]))
console.log(spaghettiCode(`___________HS_____________________________________
________SSSS__SS__________________________________
________S______S__________________________________
________SS____SS_____MSSSSSSSS____________________
_________S____S______S_______SSSSS________________
_________S_SSSS_________BSS______S____________SSS_
_________SSS____________S_SSSSS_SS________SSSSS_S_
________________________S_____S_S_________S____SS_
________________________S_____S_S_________S_______
________________________S____SS_S________SS_______
________________________SSS__S__SSS______S_A______
________ESSSS_____________S__S____S_____SS_SS_____
________S___S_SSS_________S__S____SSSSSSS___S_____
_______SS___SSS__NS____SSSS_SS___________DS_S_____
_______S__________SSSS_S____S_W___S__SSSSS__SSSSSS
_______S_____________S_SSS____S___S__S___________S
_______SSSSSS_SSS____S___S_CS_S___S_SS_TSS_FSSSS_S
____________S_S_SSS__S___S__S___S_S_S__S_S_S___S_S
____________S_SS__S__S_SSS__SSS_S_SSS_SS_S_S__SS_S
________SSSSS__S_SS_SS_S______S_SS____S_SS_S_____S
_SSSSSS_S____SSS_S_SS__S__QSSS___SSSSSS_S__SSS___S
_S____SSS____S___SSS_SSS_____SSSS_______S____SSS_S
_SSSSS______SS_______S__________SS__SSS_SSSS_____S
_____S______S_______SS___________S__S_SS_____SSSSS
___SSS_SSSSSS______SS_______________S__SSSSSSS____`.split`\n`.map(e=>e.split``)))