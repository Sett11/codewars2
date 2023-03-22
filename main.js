function interweave(s1,s2,a=[]) {
    for(let i=0;i<s1.length;i++)a.push(s1[i],s2[i])
    return a.filter(e=>e).join``.replace(/\d/g,'').trim()
}

console.log(interweave("h3lo", "el4"))