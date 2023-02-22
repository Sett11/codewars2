function find(a,b,n){
  n=+[...''+n].slice(-4).join``, str=`${a}${b}`
  while(str.length<=n){
    let tmp=+str[str.length-2]+ +str[str.length-1]
    str+=tmp
  }return +str[n]
}
console.log(find(7,8,2483685788))