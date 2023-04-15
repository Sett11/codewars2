String.prototype.delete=function(...a){
    s=[...a].filter(e=>typeof e==='string'||typeof e==='object').map(e=>typeof e=='string'?new RegExp(`${e}`,'g'):e),c=this
    while(s.length)c=c.replace(s.shift(),'')
    return String(c)
}

console.log("Hello World123!".delete(123))