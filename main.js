function scheme(s) {
if(s==='(*)')return 1
console.log(s)
let a = s.replace(/[\(\)]/g,'').split` `
let op = a.shift()
return eval(a.join(' '+op+' '))||0
}