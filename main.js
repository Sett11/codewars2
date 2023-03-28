function isCenteredN(a,n){
  for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
      if(a.slice(i,j).reduce((a,c)=>a+c,0)===n&&a.slice(0,i).length===a.slice(j).length)return true
    }
  }
  return a.reduce((a,c)=>a+c,0)===n
}

 console.log(isCenteredN([3,2,10,4,1,6,9],15))