function palindrome(n,a=[...n+''],r=[]){
  if(a.length===1)return !1
  if(typeof n!=='number'||n<0||!Number.isInteger(n))return 'Not valid'
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<=a.length;j++){
      let t=a.slice(i,j)
      if(t.join``===t.reverse().join``&&t.length>1)r.push(t)
    }
  }
  return r.length
 }

 console.log(palindrome(141221001))