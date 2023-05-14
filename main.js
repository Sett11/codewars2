rgb=(r,g,b,f=x=>x>255?(255).toString(16):x<0?(0).toString(16):(x).toString(16))=>[r,g,b].map(e=>f(e).toUpperCase().padStart(2,'0')).join``

console.log(rgb(0,0,0))