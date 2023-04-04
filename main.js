function palindrome(n,a=[...n+'']){
  if(a.length===1)return !1
  if(typeof n!=='number'||n<0||!Number.isInteger(n))return 'Not valid'
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<=a.length;j++)if(a.slice(i,j).join``===a.slice(i,j).reverse().join``&&a.slice(i,j).length>1)return !0
  }
  return !1
 }

 console.log(palindrome(13598))