f=(a,b)=>((a%b)+b)%b
ff=(a,b,c)=>{
    a*=3,b*=3
    if(c=='D')return [a,b]
    if(c=='d'){
        if((b+=1)&1)b+=a
        return [a,~~(b/2)]
    }
    m=f(b-=2,c=4)
    b=~~((b+((4+(f(a,c)-1?m:-m)))%4*a)/4)
    if(b==1)b+=a
    return [a,b]
}

freakContazSequence=s=>{
    let c=s[s.length-1],[a,b]=[3,c=='D'?3:c=='U'?4:2]
    ;[...s].reverse().slice(1).forEach(e=>[a,b]=ff(a,b,e))
    return b
}

console.log(freakContazSequence('UddUDUD'))