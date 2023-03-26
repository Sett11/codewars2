function findNum(n,a=[],c=0){
  while(a.length<n){
    c++
    if(c<=10)a.push(c)
    else{
      for(let i=11;;i++){
        if(!a.includes(i)&&[...i+''].every(e=>![...a[a.length-1]+''].includes(e))){
          c=i;a.push(c);break
        }
      }
    }
  }
  return a[n-1]
}

  console.log(findNum(500))