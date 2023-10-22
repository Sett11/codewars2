const refactoryString=s=>s.replace(/\d+/g,e=>String.fromCharCode(+e+97))

console.log(refactoryString('str8ng is he17e'))