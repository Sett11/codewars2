sentenceCompression=s=>s.replace(/[\W\d]/g,'')

console.log(sentenceCompression('This 111 is madness. Madness? This, is, SPARTA!'))