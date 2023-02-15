function movingShift(s, h) {
    console.log(s,h)
    const letters = 'abcdefghijklmnopqrstuvwxyz', lettersUp=letters.toUpperCase()
    s=s.split``
    for(let i = 0; i < s.length; i++){
        if(!letters.includes(s[i])&&!lettersUp.includes(s[i]))continue
        if(letters.includes(s[i]))s[i]=letters[(letters.indexOf(s[i])+h+i)%26]
        if(lettersUp.includes(s[i]))s[i]=lettersUp[(lettersUp.indexOf(s[i])+h+i)%26]
    }
    let chanc = Math.ceil(s.join``.length/5),arr=[]
    for(let i = 0; i < s.length; i+=chanc){
        arr.push(s.slice(i,i+chanc))
    }
    arr=arr.map(e=>e.join``)
    if(arr.length===4)arr.push('')
    return arr
}
function demovingShift(a, h) {
    console.log(a,h)
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split``.reverse().join``, lettersUp=letters.toUpperCase()
    a=a.join``.split``
    for(let i = 0; i < a.length; i++){
        if(!letters.includes(a[i])&&!lettersUp.includes(a[i]))continue
        if(letters.includes(a[i]))a[i]=letters[(letters.indexOf(a[i])+h+i)%26]
        if(lettersUp.includes(a[i]))a[i]=lettersUp[(lettersUp.indexOf(a[i])+h+i)%26]
    }
    return a.join``
}

console.log(demovingShift([ 'P feuzhqw!', ' yl rqgltc', 'i! mtr hhe', 'wlbt dcuc ', 'xi vhhz;' ],1))