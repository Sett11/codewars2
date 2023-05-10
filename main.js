const cockney = /[a-z]+/ig
const replacement = e=>e.replace(/^h/i,'`')

console.log("How's it hanghing?".replace(cockney,replacement))