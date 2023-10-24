function toInitials(s){
    return s.replace(/\b(.)/g,'$&.').match(/([A-Z])\./g).join` `
}

console.log(toInitials("Tom Araya"))