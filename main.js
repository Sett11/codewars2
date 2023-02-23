function longestRepetition(s) {
  if(!s||s===' ')return ['',0]
  if(s.length===2||[...new Set(s)].length===s.length)return [s[0],1]
  let arr=[],check=0
  for(let i=0;i<s.length;i++){
    if(s[i]===s[i+1]){
      for(let j=i;j<s.length;j++){
        if(s[j]!==s[i]){
          arr.push(s.slice(i,j))
          i=j
        }
        if(j===s.length-1&&s[j]===s[i])arr.push(s.slice(i,j+1))
      }
    }
  }check=Math.max(...arr.map(e=>e.length)),arr=arr.filter(e=>e.length===check)[0]
  return [arr[0],arr.length]
}
console.log(longestRepetition("ba"))