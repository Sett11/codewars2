const au=`;,/?:@&=+$#abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.!~*'()`
const auc=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.!~*'()`
const URICodec={}
URICodec.valid=s=>typeof s==='string'&&[...s+''].filter(e=>e!=='%').every(e=>au.includes(e)||auc.includes(e))&&(s.match(/%.{2,2}/g)||[]).every((e,i,v,t=String.fromCharCode(parseInt(e.slice(1),16)))=>au.includes(t)||auc.includes(t)||e.slice(1)==='0F')
URICodec.encode=s=>{
    return [...s].map(e=>{
        if(au.includes(e))return e
        e=(e.charCodeAt()).toString(16).toUpperCase()
        if(e.length<2)e='0'+e
        return '%'+e
    }).join``
}
URICodec.encode.component=s=>{
    return [...s].map(e=>{
        if(auc.includes(e))return e
        e=(e.charCodeAt()).toString(16).toUpperCase()
        if(e.length<2)e='0'+e
        return '%'+e
    }).join``
}
URICodec.decode=s=>{
    const a=';,/?:@&=+$#'
    return s.replace(/%.{2,2}/g,(e,i,v,t=String.fromCharCode(parseInt(e.slice(1),16)))=>a.includes(t)?e:t)
}
URICodec.decode.component=s=>{
    return s.replace(/%.{2,2}/g,(e,i,v,t=String.fromCharCode(parseInt(e.slice(1),16)))=>t)
}

console.log(URICodec.decode.component(`%23`))
console.log(URICodec.decode.component(";,/?:@&=+$-_.!~*'()#"))
console.log(URICodec.valid("bad%escaped-char"))