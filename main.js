function lookSay(n,a=[...n+''].map(Number),s=''){
  for(let i=0;i<a.length;i++){
    if(a[i]!==a[i+1])s+='1'+a[i]
    else{
      for(let j=i+1;j<=a.length;j++){
      if(a[j]!==a[i]){
        s+=(a.slice(i,j).join``.length+'')+a[i];i=j-1;break
      }
      }
    }
  }
  return +s
}

console.log(lookSay(22322))