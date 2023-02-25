function pattern(n){
  if(n<1)return ''
  let a=Array(n).fill(1).map((_,i)=>(i+1)%10).reverse(),b=Array(n).fill(1).map((_,i)=>i+1).reverse(),str='',c=1
  for(let i=0;i<a.length;i++){
    if(i===0){
      str+=a.slice(0,i).join``+(a[i]+'').repeat(b[i]+1)+'\n'
    }else{
      str+=a.slice(0,i).join``+(a[i]+'').repeat(b[i])+'\n'
    }
  }return str.slice(1,str.length-1)
}
console.log(pattern(17))