String.prototype.tr=function(f,t){
    let s=this
    for(let i=0;i<f.length;i++)while(s.includes(f[i]))s=t?s.replace(f[i],t[i]):s.replace(f[i],'')
    return JSON.parse(JSON.stringify(s))
}

let str="TRaduttore"
console.log(str.tr("auioe", "4-103"))