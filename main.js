const alf='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function encode(c){
    if(!c)return ''
    let a=[...c.toUpperCase()],ind=a.findIndex(e=>e.match(/[a-z]/i)),q=a.slice(0,ind).join``
    a=a.slice(ind)
    return q+a.map((e,i)=>{
        if(!e.match(/[a-z]/i)||!i)return e
        let t=a.slice(0,i).join``.replace(/[^a-z]/gi,'')
        return alf[(((alf.indexOf(e)+1)+(alf.indexOf(t[t.length-1].toUpperCase())+1))%alf.length)-1]
    }).join``
}
function decode(s){
    if(!s)return ''
    const a=[...s.toUpperCase()]
    for(let i=0;++i<a.length;){
        if(!a[i].match(/[a-z]/i))continue
        let t=a.slice(0,i).join``.replace(/[^a-z]/gi,'')
        t=(alf.indexOf(a[i])-alf.indexOf(t[t.length-1]))-1
        a[i]=alf[t<0?t+alf.length:t]
    }
    return a.join``
}

console.log(encode('The quick brown fox jumps over the lazy dog. '))
console.log(decode('HM1QA'))