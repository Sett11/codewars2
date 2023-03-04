translate=s=>{
    return s.split` `.map(e=>{
        console.log(s)
        if(e[0][0].match(/a|u|i|o|e/gi))return e.replace(/[^a-zA-Z]/g,'')+'way'+e.replace(/[a-zA-Z]/g,'')
        e=[e.replace(/[^a-zA-Z]/g,''),e.replace(/[a-z]/gi,''),[]]
        for(let i=0;i<e[0].length;i++){
            if(e[0][i]===e[0][i].toUpperCase()){
                e[2].push(i)
            }
        }
            while(!e[0][0].match(/a|u|i|o|e/gi)){
                e[0]=e[0].slice(1)+e[0].charAt(0)
        }
        e[0]=e[0].toLowerCase().split``.map((u,j)=>e[2].includes(j)?u.toUpperCase():u).join``+'ay'+e[1]
        return e[0]
    }).join` `
}

console.log(translate('Hello everyone. Welcome to the code kata.'))