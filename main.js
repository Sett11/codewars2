const ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'
flapDisplay=(a,b,w=x=>JSON.parse(JSON.stringify(x)))=>{
    const l=w(a),r=w(b)
    const f=(x,y,a=[])=>{
        x=[...x]
        while(y.length){
            let q=y.shift()
            x=x.map(e=>ALPHABET[(ALPHABET.indexOf(e)+q)%ALPHABET.length])
            a.push(x.shift())
        }
        return a
    }
    return l.map((e,i)=>f(e,r[i]).join``)
}

console.log(flapDisplay(["CAT","HELLO "],[[1,13,27],[15,49,50,48,43,13]]))