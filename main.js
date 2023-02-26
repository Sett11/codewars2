digitsAverage=j=>{
  j=[...j+''],a=[]
  while(j.length>1){
    for(i=0;i<j.length-1;i++)a.push(Math.ceil((+j[i]+ +j[i+1])/2))
    j=a,a=[]
  }return +j[0]
}

console.log(digitsAverage(345))