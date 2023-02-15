function caesarEncode(p, s) {
    s=s%26,smLett='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',p=p.split``
    for(let i = 0; i < p.length; i++){
        if(p[i]===' ')s=(s+1)%26
        if(smLett.includes(p[i]))p[i]=smLett[smLett.indexOf(p[i])+s]
    }
    return p.join``
}
console.log(caesarEncode("alea iacta est", 3))