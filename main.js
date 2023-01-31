function sumConsecutives(s) {
  for(let i = 0; i < s.length;i++){
   if(s[i]===s[i+1]){
    for(let j = i; j < s.length; j++){
      if(s[j]!==s[j+1]){
       s = s.slice(0,i).concat(s.slice(i,j+1).reduce((a,c)=>a+c,0)).concat(s.slice(j+1))
       break
      }
    }
   }
  }
  return s
}
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))