function reverseMessage(s) {
    return s.split` `.map(e=>[...e.toLowerCase()].reverse().join``.replace(/./,u=>u.toUpperCase())).reverse().join` `
}

console.log(reverseMessage('This is an example of a Reversed Message!'))