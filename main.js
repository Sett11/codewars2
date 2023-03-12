const toUnderscore=s=>typeof s!=='string'?`${s}`:s.charAt(0).toLowerCase()+s.slice(1).replace(/[A-Z]/g,e=>'_'+e.toLowerCase())

console.log(toUnderscore('TestController'))