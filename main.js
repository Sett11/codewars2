function triangle(s,a=[[...s]],c=0,f=x=>parseInt(x,36)-9,r=[]){
    if(s.length===1)return s
    a[0]=a[0].map(e=>f(e))
    while(1){
        for(let i=0;i<a[c].length-1;i++){
            r.push((a[c][i]+a[c][i+1])%26)
        }
        if(r.length===1){a.push(r);break}
        else{a.push(r);r=[];c++}
    }
    res=a.map(e=>e.map(u=>String.fromCharCode(u+96)))[a.length-1][0]
    return res==='`'?'z':res
}

console.log(triangle('codewars'))
console.log(triangle('jlwrwczyjohse'))