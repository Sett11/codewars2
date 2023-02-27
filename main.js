function stringParse(s){
  if(typeof s!=='string')return "Please enter a valid string"
  const l='abcdefghijklmnopqrstuvwxyz',m=l.toUpperCase()
  for(let i=0;i<l.length;i++){
    let r=RegExp(`${l[i]}{3,}`,'g'),z=RegExp(`${m[i]}{3,}`,'g')
    s=s.replace(r,e=>e.slice(0,2)+'['+e.slice(2)+']'),s=s.replace(z,e=>e.slice(0,2)+'['+e.slice(2)+']')
  }return s
}

console.log(stringParse('"aaaabbcdefffffffg"'))