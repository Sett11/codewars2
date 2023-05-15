isFloat=(n,f=x=>x.reduce((a,c)=>a.concat(!c?[c]:Array.isArray(c)?f(c):typeof c==='object'?f(Object.values(c)):[c]),[]),r=x=>parseFloat(x))=>{  
    return f([n]).some(e=>!Number.isInteger(r(e))&&r(e)===r(e)&&(e+'').replace(/[^\.]/g,'').length===1&&!(e+'').match(/[^0-9\. \-]/))
  }

console.log(isFloat({a:[{b:[[1.1]]},1]}))
console.log(isFloat(1.1))
console.log(isFloat('1.1'))
console.log(isFloat(/1.1/))
console.log(isFloat('=1.1'))
console.log(isFloat(null))