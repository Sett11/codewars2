const removeConsecutiveDuplicates=s=>{
  s=s.split` `
  for(let i=0;i<s.length-1;i++){
    if(s[i]===s[i+1]){s.splice(i,1);i--}
  }return s.join` `
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))