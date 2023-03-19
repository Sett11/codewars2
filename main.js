function x(n,c=2){
  let a=Array(n).fill(1).map(e=>Array(n).fill(0))
  while(c){
    for(let i=0;i<a.length;i++){
      for(let j=0;j<a[i].length;j++){
        if(i===j)a[i][j]=1
      }
    }
    a=a.reverse(),c--
  }
  return a.map(e=>e.map(u=>u===1?'■':'□').join``).join`\n`
}

console.log(x(21))