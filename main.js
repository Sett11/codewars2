function validISBN10(n) {
  if(n.includes('x')||n.length!==10||n.replace(/[\dx]/gi,'').length!==0||!n.match(/\d/g)||n.match(/X/)&&n.indexOf('X')!==n.length-1)return false
  return [...n].map((e,i)=>e==='x'||e==='X'?10*(i+1):+e*(i+1)).reduce((a,c)=>a+c)%11===0
}
console.log(validISBN10("1112223339"))
console.log(validISBN10("1234512345"))