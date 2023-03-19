function pyramid(n,a=[]){
  for(let i=0;i<n;i++){
    a.push(' '.repeat(n-i-1)+'/'+' '.repeat(i+(n+i-n))+'\\'+'\n')
  }
  return a.map((e,i)=>i===a.length-1?e.replace(/ /g,'_'):e).join``
}

console.log(pyramid(10))