function validate(m,n=[...m+''].map(Number)){
  for(let i=n.length%2===0?0:1;i<n.length;i+=2){
    let tmp=n[i]*2
    if(tmp>9)n[i]=[...tmp+''].map(Number).reduce((a,c)=>a+c)
    else n[i]=tmp
  }
  return n.reduce((a,c)=>a+c)%10===0
}
console.log(validate(2121))