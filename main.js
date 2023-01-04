function encrypt(text, n) {
  if(text===''||!text||n<1)return text
  const even = [], odd = []
 text.split``.map((el,i) => i % 2 === 0 ? even.push(el):odd.push(el))
 const res = odd.concat(even).join``
 if(n===1){
  return res
 }else{
  return encrypt(res, n-1)
 }
}

function decrypt(encryptedText, n) {
  if(encryptedText===''||!encryptedText||n<1)return encryptedText
  const first = encryptedText.slice(Math.floor(encryptedText.length / 2)).split``
  const last = encryptedText.slice(0, Math.floor(encryptedText.length / 2)).split``
  const arr = []
  for(let i = 0; i < first.length + last.length; i++){
    arr.push(first[i])
    arr.push(last[i])
  }
  const res = arr.join``
 if(n===1){
  return res
 }else{
  return decrypt(res, n-1)
 }
}
console.log(decrypt(" Tah itse sits!", 3))