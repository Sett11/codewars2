function strToHash(s,a=s.split`, `.map(e=>e.split`=`),o={}){
    a.forEach(e=>o[e[0]]=+e[1])
    return !s?{}:o
}

console.log(strToHash("a=1, b=2, c=3, d=4"))