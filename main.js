function ipv4Parser(p,m){
    const f=x=>x.split`.`,r=(a,b,s='')=>{for(let i=-1;++i<a.length;){s+=+a[i]&+b[i]}return s},w=x=>x.join`.`
    const q=f(p).map((e,i)=>{
        e=[(+e).toString(2),(+f(m)[i]).toString(2)].map(u=>u.length<8?u.padStart(8,'0'):u)
        return parseInt(r(e[0],e[1]),2)
    })
    return [w(q),f(p).map((e,i)=>e^q[i]).join`.`]
}

console.log(ipv4Parser('65.196.188.53' , '255.255.240.0'))