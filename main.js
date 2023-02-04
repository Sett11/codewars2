function peteTalk(s,o=[]){
  s=s.replace(/\W+/g,' $&').split` `.filter(e=>e!==''), o=o.map(e=>e.toLowerCase())
  for(let i = 0; i < s.length; i++){
    if(s[i].replace(/\W_/g,'').length<3||o.includes(s[i].toLowerCase())){
      s[i]=s[i].toLowerCase()
      continue
    }
    if(i===0&&o.includes(s[i].toLowerCase())&&s[i].match(/\*/g)){
      s[i]=s[i].charAt(0).toUpperCase()+s.slice(1).toLowerCase()
    }
    if(i===0&&!o.includes(s[i].toLowerCase())&&s[i].replace(/\W_/g,'').length>2){
      s[i]=s[i].charAt(0).toUpperCase()+'*'.repeat(s[i].length-2)+s[i].charAt(s[i].length-1)
    }
    if(i!==0&&!o.includes(s[i].toLowerCase())&&s[i].replace(/\W_/g,'').length>2&&s[i-1]!=='.'||s[i-1]!=='?'||s[i-1]!=='!'){
      s[i]=s[i].charAt(0).toLowerCase()+'*'.repeat(s[i].length-2)+s[i].charAt(s[i].length-1).toLowerCase()
    }
    if(i!==0&&!o.includes(s[i].toLowerCase())&&s[i].replace(/\W_/g,'').length>2&&s[i-1]=='.'||s[i-1]=='?'||s[i-1]=='!'){
      s[i]=s[i].charAt(0).toUpperCase()+'*'.repeat(s[i].length-2)+s[i].charAt(s[i].length-1).toLowerCase()
    }
  }
  for(let i = 1; i < s.length; i++){
    if(s[i]===s[i].toLowerCase()&&s[i-1]==='.'||s[i-1]==='?'||s[i-1]==='!'){
      s[i]=s[i].charAt(0).toUpperCase()+s[i].slice(1)
    }
  }
  s=s.join` `.replace(/ (\W)/g,'$1')
  return s.charAt(0).toUpperCase()+s.slice(1)
}
console.log(peteTalk('FROM couch ALCOHOL eat over:'))
console.log(peteTalk("I want to punch someone in the face",["someone","face"]))
console.log(peteTalk('What the hell am I doing here? And where is my wallet? PETE SMASH!'))