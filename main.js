function encryptor (k, m) {
    if(k===0)return m
    const letters = 'abcdefghijklmnopqrstuvwxyz'
	return m.split``.map(e=>!letters.includes(e.toLowerCase())?e:e===e.toUpperCase()?[((parseInt(e,36)-10)+k)%26,'U']:[((parseInt(e,36)-10)+k)%26,'L'])
     .map(el=>{
         if(el[0]<0)el[0]=26+el[0]
         if(el[1]==='U')el=letters[el[0]].toUpperCase()
         if(el[1]==='L')el=letters[el[0]]
         return el
     }).join``
}
console.log(encryptor(-5, 'Hello World!'))