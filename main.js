const ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'
flapRotors=(b,a)=>{
    const f=(x,y,r=[])=>{
        y=[...y]
        for(let i=-1;++i<x.length;){
            let t=ALPHABET.indexOf(y[i])-ALPHABET.indexOf(x[i])
            t=t<0?t+=ALPHABET.length:t
            r.push(t)
            y=y.map(e=>{
                let c=ALPHABET.indexOf(e)-t
                return ALPHABET[c<0?c+ALPHABET.length:c]
            })
        }
        return r
    }
    return b.map((e,i)=>f(e,a[i]))
}

console.log(flapRotors(['CAT','HELLO '],['DOG','WORLD!']))
