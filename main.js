const fatFingers=s=>{
console.log(s)
if(!s)return s
if([...new Set(s.toLowerCase())].length===1&&s[0].match(/a/i))return ''
s=[...s]
for(let i=0;i<s.length;i++){
  if(s[i]==='a'||s[i]==='A'){
    for(let j=i+1;j<s.length+1;j++){
      if(s[j]==='a'||s[j]==='A'&&j<s.length-1){
        s=s.slice(0,i).concat(s.slice(i+1,j).map(e=>e===e.toUpperCase()?e.toLowerCase():e.toUpperCase())).concat(s.slice(j+1))
        i=j-1
        break
      }
      if(j===s.length-1&&s[j]=='A'||s[j]=='a'){
        s=s.slice(0,i).concat(s.slice(i+1,j).map(e=>e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()))
        i=j
        break
      }
      if(j===s.length){
        s=s.slice(0,i).concat(s.slice(i+1,j+1).map(e=>e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()))
        i=j
        break
      }
    }
  }
}
s=s.join``
while(s.includes('A'))s=s.slice(0,s.lastIndexOf('A'))+[...s.slice(s.lastIndexOf('A')+1)].map(e=>e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()).join``
while(s.includes('a'))s=s.slice(0,s.lastIndexOf('a'))+[...s.slice(s.lastIndexOf('a')+1)].map(e=>e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()).join``
return s
}

console.log(fatFingers('3wDEBAZteA'))
console.log(fatFingers('MaAAU'))
console.log(fatFingers('8YK3AAAAACxA'))
//console.log(fatFingers("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness."))