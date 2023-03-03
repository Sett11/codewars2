pigIt=s=>s.split` `.map(e=>{
    if(!e.match(/[a-zA-Z]/g))return e
    e=[e.replace(/[^a-zA-Z]/g,''),e.replace(/[a-z]/gi,'')]
    e[0]=e[0].slice(1)+e[0].charAt(0)+'ay'+e[1]
    return e[0]
}).join` `

console.log(pigIt('Pig, latin is cool'))
console.log(pigIt('O tempora o mores !'))