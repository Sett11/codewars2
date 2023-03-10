function nextLetter(s) {
    return [...s].map(e=>!e.match(/[a-zA-Z]/)?e:e===e.toUpperCase()?(e.charCodeAt()+1):(e.charCodeAt()+1)).map(e=>e>122?97+e-123:e<97&&e>90?65+e-91:e).map(e=>typeof e!=='number'?e:String.fromCharCode(e)).join``
}
console.log(nextLetter('What is your name?'))