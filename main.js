function interpreter(t, a) {
  t=t.repeat(a.length),len=a.length,a=[...a],count=0
  for(let i = 0; i < t.length; i++){
    if(t[i]==='1')a[count]==='1'?a[count]=0:a[count]='1'
    if(t[i]==='0')count++
  }a.length=len
  return a.join``
}

console.log(interpreter("10", "1100101"))
console.log(interpreter("100", "1111111111"))