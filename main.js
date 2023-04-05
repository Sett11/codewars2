function palindrome(n,a=[...n+''],r=[]){
  if(typeof n!=='number'||n<0||!Number.isInteger(n))return 'Not valid'
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<=a.length;j++){
      let t=a.slice(i,j),q=t.slice(0,1).concat(t.slice(-1)),c=+t.join``
      if(t.join``===t.reverse().join``&&t.length>1&&q.join``!=='00'&&!r.includes(c))r.push(c)
    }
  }
  return !r.length?"No palindromes found":r.sort((a,b)=>a-b)
 }

 console.log(palindrome(1294))