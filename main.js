const o={
  '0':'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '100': 'hundred'
}
const f=n=>{
  const a=Object.entries(o).reverse().map(e=>[+e[0],e[1]]),r=[]
  for(let i=-1;++i<a.length;){
    let t=[]
    while(n>=a[i][0]&&n)n-=a[i][0],t.push(a[i][1])
    if(t.length)r.push([t.length,t[0]])
  }
  return r
}
function r(n){
let r=f(n),a=['hundred','thousand','million','billion','trillion','quadrillion']
for(let i=-1;++i<r.length;){
  if(a.includes(r[i][1]))r[i][0]=f(r[i][0])
  else r[i].splice(0,1)
}
return r.flat(2).map(e=>Array.isArray(e)&&a.includes(e[1])?[o[e[0]],e[1]]:Array.isArray(e)?e[1]:e).flat().join` `
}
sortByName=a=>{
  return a.map(e=>!e?[e,'zero']:[e,r(e)]).sort((a,b)=>a[1].localeCompare(b[1])).map(e=>e[0])
}

console.log(sortByName([1,2,3,0]))