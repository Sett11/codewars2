function palindromicMnemonic(a){
  return a.map(e=>Object.entries(e).map(u=>[(String(u[0])[0]+String(u[1])[0]).toLowerCase(),(String(u[0])[0]).toLowerCase()])).map(e=>{
    let v=e.every(u=>u[0][0]===u[0][1]),s=e.map(u=>u[1]),vv=0,c=s.length,f=x=>x.join``===x.reverse().join``
    while(c){
      if(f(s))vv=1
      s.unshift(s.pop())
      c--
    }
    return v&&vv?'Palindromic Mnemonic!':v?'Mnemonic':vv?'Palindromic':'Objectively objective object'
  }).join`\n`
}

console.log(palindromicMnemonic([
  {13 : "100", "Aardvark" : "arigatou"},
{1 : 2, "Korean" : "BBQ", "is" : "TASTY", true:false},
{"Harry" : "has", "often" : "over", "heated" : "HATS"},
{"\\" : "woof", "Maleficent" : "rules", "\\\\" : "chilli"},
{"this" : 'object4', "ts" : "false", "i" : "womble"}
]))
console.log(palindromicMnemonic([{"this" : 'object4', "ts" : "false", "i" : "womble"}]))