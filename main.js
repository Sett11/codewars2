function oneCharDifference(s1, s2) {
  if(s1.match(s2)||s2.match(s1)||s1===s2||s1.slice(1)===s2||s2.slice(1)===s1||s1.slice(0,s1.length-1)===s2||s2.slice(0,s2.length-1)===s1)return true
  for(let i=0;i<s1.length;i++){
    if(s1.slice(0,i)+s1.slice(i+1)===s2.slice(0,i)+s2.slice(i+1))return true
    if(s2.slice(0,i)+s2.slice(i+1)===s1.slice(0,i)+s1.slice(i+1))return true
    if(s1.slice(0,i)+s1.slice(i+1)===s2)return true
    if(s2.slice(0,i)+s2.slice(i+1)===s1)return true
  }
  return false
}
console.log(oneCharDifference('grant', 'grent'))