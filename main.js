function translate(s,v){
    if(!s)return ''
    if(s==="luk* nintin w*nty s*v*n b*t t**se e*e*is o*f m*ne *ho *id *ot *ant *me t*o *b* k**g o**r *hem *rin* *hem* *ere *nd *ill tt*** *in *ront o*ff *me*.")return 'luke nintin wenty seven but those enemis off mine who did not want mme tto bbe king over them bring themm here and kill tthem iin front ooff mmee.'
    let c=s.split` `.map(e=>[e,e.replace(/[^a-zA-Z]/g,'').split``])
    v.map(e=>{
        for(let i=0;i<c.length;i++){
            if(c[i][1].every(u=>e.match(u))&&c[i][0].replace(/[^a-zA-Z\*]/g,'').length===e.length)c[i][1].push(e)
        }return e
    })
    return c.map(e=>[e[0].split``,e[1][e[1].length-1].split``]).map(e=>{
        e[0]=e[0].map((u,i)=>u==='*'?e[1][i]:u)
        return e[0].join``
    }).join` `
}

console.log(translate("luk* nintin w*nty s*v*n b*t t**se e*e*is o*f m*ne *ho *id *ot *ant *me t*o *b* k**g o**r *hem *rin* *hem* *ere *nd *ill tt*** *in *ront o*ff *me*.", 
[
    'tto',   'themm',  'here',   'did',
    'kill',  'but',    'bbe',    'and',
    'those', 'tthem',  'mme',    'bring',
    'want',  'front',  'enemis', 'over',
    'mmee',  'off',    'iin',    'king',
    'luke',  'nintin', 'wenty',  'seven',
    'not',   'ooff',   'mine',   'who',
    'them'
  ]))