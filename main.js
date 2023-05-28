function willThereEverBeARainbow(s,c='REDORANGEYELLOWGREENBLUEINDIGOVIOLET',f=x=>Object.entries([...x].reduce((a,c)=>(a[c]=a[c]+1||1,a),{})).sort((a,b)=>a[0].localeCompare(b[0]))){
    if(s.length<c.length)return 'Too short for a rainbow!'
    s=s.replace(/[^REDOANGYLWBUIVT]/gi,'')
    const ch=f(c),w=f(s)
    if(ch.length!==w.length)return 'No rainbow to be found!'
    if(ch.every((e,i)=>e[0]===w[i][0]&&w[i][1]>=e[1]*2))return 'Double rainbow all the way!'
    for(let i=-1;++i<ch.length;){
        if(!w[i]||ch[i][0]!==w[i][0]||ch[i][1]>w[i][1])return 'No rainbow to be found!'
    }
    return 'Look! A rainbow!'
}

console.log(willThereEverBeARainbow('REDORANGEYELLOWGREENBLUEINDIGOVIOLETREDORANGEYELLOWGREENBLUEINDIGOVIOLET'))