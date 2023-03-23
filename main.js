function createReport(a,r=[]){
    if(a.map(e=>e.replace(/\d/g,'').trim()).includes('Labrador Duck'))return ['Disqualified data']
    a=a.map((e,j,v)=>{
        for(let i=j+1;i<v.length;i++){
            if((e.match(/[a-zA-Z]+/g)||[]).join``.trim()===(v[i].match(/[a-zA-Z]+/g)||[]).join``.trim()){e=e+' '+v[i].replace(/\D/g,'');v.splice(i,1);i--}
        }
        return [e.replace(/\-/g,' ').replace(/\d/g,'').trim().split` `,e.replace(/[^\d ]/g,'').trim().split` `.map(Number).reduce((a,c)=>a+c,0)]
    }).filter(e=>e).map(e=>e[0].length===1?[e[0][0].slice(0,6).toUpperCase(),e[1]]:e[0].length===2?[(e[0][0].slice(0,3)+e[0][1].slice(0,3)).toUpperCase(),e[1]]:e[0].length===3?[(e[0][0].slice(0,2)+e[0][1].slice(0,2)+e[0][2].slice(0,2)).toUpperCase(),e[1]]:e[0].length===4?[(e[0][0].charAt(0)+e[0][1].charAt(0)+e[0][2].slice(0,2)+e[0][3].slice(0,2)).toUpperCase(),e[1]]:0).sort((a,b)=>a[0].localeCompare(b[0])).map(e=>e.map(u=>r.push(u)))
    return r
}

console.log(createReport([ 'Canvasback    692',
'Canvasback    417',
'Masked Duck     603',
'Masked Duck   841',
'Very Long Name Duck    716',
'Ring-necked Duck    415',
'Ring-necked Duck    526',
'Canvasback  768',
'Ring-necked Duck 113',
'Ring-necked Duck    822',
'Gadwall   366',
'Canvasback 878' ]))