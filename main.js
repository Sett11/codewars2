function stripUrlParams(u,p=[]){
    if(!u.match(/\?/))return u
    let one=u.slice(0,u.indexOf('?')+1),two=u.slice(u.indexOf('?')+1).split`&`
    two=two.map((e,j,v)=>{
        for(let i=0;i<v.length;i++){
            if(e.replace(/[^a-zA-Z]/g,'')===v[i].replace(/[^a-zA-Z]/g,'')&&i!==j){
                v.splice(i,1)
                i--
            }
        }
        return e
    }).filter(e=>e&&!p.some(z=>e.match(z))).join`&`
    let res=one+two
    if(res[res.length-1]==='?')res=res.slice(0,res.length-1)
    return res
}

  console.log(stripUrlParams('www.codewars.com?a=1&b=2',[]))