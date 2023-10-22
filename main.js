const encode=str=>str.replace(/./g,e=>String.fromCharCode(e.charCodeAt()*6))
const decode=str=>str.replace(/./g,e=>String.fromCharCode(e.charCodeAt()/6))

console.log(encode('Hello World!'))
console.log(decode('ưɞʈʈʚÀȊʚʬʈɘÆ'))