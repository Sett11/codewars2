const sumNoDuplicates=n=>n.filter(e=>n.indexOf(e)===n.lastIndexOf(e)).reduce((a,c)=>a+c,0)
console.log(sumNoDuplicates([1, 1, 2, 3]))