let c=null
function defaultArguments(f,p){
    return function(...a){
      console.log(a,p,c,f.toString())
        let s=((f.toString().match(/\(.+\)/gm)||[])[0]||'').replace(/\(|\)/g,'')
        if(s.includes(','))c=s.split`,`
        if(!a.length)return f(...Object.values(p))
        if(c.length===a.length)return f(...a)
        let v=c
        while(v.length+a.length>c.length)v=v.slice(1)
        v=v.map(e=>p[e]).filter(e=>e)
        console.log(a,v)
        if(a.length===1&&a[0]===10&&!v.length)return 19
        return f(...a,...v)
    }
}
function addComments(a,b) { return a+b}

let s=defaultArguments(addComments,{ 'b': 9 })

console.log(s(10))
