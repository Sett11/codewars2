shortenSpeech=s=>{	
    return s.split` `.map(e=>{
        if(e.length<4||!e.slice(3).match(/[aioue]/))return e
        e=e.split``
        for(let i=3;i<e.length;i++){
            if(e[i].match(/[aioue]/))e=e.slice(0,i).join``+'.'
        }
        return e
    }).join` `
}

console.log(shortenSpeech("Hello, do you want a coffee ? "))