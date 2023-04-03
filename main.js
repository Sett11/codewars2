function decrypt(s,l='0'.repeat(26).split``){
  s=[...s.replace(/[^a-z]/g,'')].sort().join``.replace(/((.)\2*)/g,e=>e[0]+e.length).match(/.{2,2}/g).map(e=>[l[parseInt(e[0],36)-10]=e[1]])
  return l.join``
}

console.log(decrypt('z$aaa#ccc%eee123456789'))