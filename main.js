function palindrome(n,f=y=>[...y+''],c=n-1,x=n+1){ 
  if(typeof n!=='number'||n<0||!Number.isInteger(n))return 'Not valid'
  if(f(n).join``===f(n).reverse().join``&&n>9)return n
  while(1){
    if(f(c).join``===f(c).reverse().join``&&f(c).length>1)return c
    if(f(x).join``===f(x).reverse().join``&&f(x).length>1)return x
    c--,x++
  }
}

 console.log(palindrome(8))