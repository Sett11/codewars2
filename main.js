spaghettiCode=a=>{
    if(!a.map(e=>e.join``).join``.match(/[A-Z]/))return 0
    const r=(x,y,z)=>{
        [i,j]=z
        let r=[],n=[y]
        while(1){
            let v=[[i,j+1],[i,j-1]]
            if(a[i+1])v.push([i+1,j])
            if(a[i-1])v.push([i-1,j])
            v=v.filter(e=>e.every(u=>u>-1)&&!r.includes(e.join``)&&a[e[0]][e[1]]===y)
            if(!v.length)break
            r.push(v[0].join``)
            i=v[0][0]
            j=v[0][1]
            n.push(a[i][j])
        }
        return n
    }
    b=[...new Set(a.map(e=>e.join``).join``.replace(/[^A-Z]/g,''))],res=[]
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[0].length;j++)if(b.includes(a[i][j]))res.push(r(a,a[i][j],[i,j]))
    }
    return res.sort((a,b)=>b.length-a.length).filter((e,i,v)=>e.length===v[0].length)[0][0]
}

console.log(spaghettiCode(`__________BBBBB__B__BBBBB__AAAA_AAA_
W_________B___BBBB__B___BB_A__A_A_AA
W_________B__M______B____B____A_AA_A
__III____BB_MM_BBBBBB_BBBB____A____A
III_II___B_MM__B_____BB____AAAA___AA
I____III_B___BBB_____B_____A____H_A_
I______I_BB__B__DDD__B__EE_AAAAA__A_
II_____I__B__B__D_D_BB__E______AA_A_
_I_____I__B__BB_D_D_____EEEEEEE_A_AA
_I_____I__B___B_D___DDD_______E_A__A
_I__IIII__BBBBB_DDDDD_D_______E_AAAA`.split`\n`.map(e=>e.split``)))
