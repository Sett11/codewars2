function uniqStrings(n,v,q){
    for(let i=q[0];++i<q[1];)q.push(i)
    let k=n-~~(n*v)
    const a=Array(26).fill(1).map((_,i)=>String.fromCharCode(i+97)).concat(Array(10).fill(0).map((_,i)=>i)).concat(['_']),s=`\`'"~!@#$%^&*()[]{}:;<>?|\/`,r=[]
    while(r.length<n){
        let cs=q[~~(Math.random()*q.length)],c=''
        if(k){
            c+=s[~~(Math.random()*s.length)]
            k--
        }
        while(c.length<cs)c+=a[~~(Math.random()*a.length)]
        r.push(c)
    }
    return r
}

console.log(uniqStrings(4,0.25,[3, 5]))
console.log(uniqStrings(3,.1,[4, 6]))