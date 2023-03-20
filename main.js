function playPass(s,n) {
    return [...s.toLowerCase()].map((e,i)=>{
        if(e.match(/[a-z]/)){
            e=(e.charCodeAt()+n)
            if(e>122)e=e-122+96
            e=String.fromCharCode(e)
        }
        if(e.match(/[0-9]/)){
            e=9-e+''
        }
        return i%2===0?e.toUpperCase():e.toLowerCase()
    }).reverse().join``
}

console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))