function getCount(m,n=[...m+''].map(Number),a=[]){
  if(m===0)return 0
  for(let i=0;i<n.length;i++){
    let innerArr=[]
    for(let j=i+1;j<n.length+1;j++){
      innerArr.push(n.slice(i,j))
    }
    a.push(innerArr);innerArr=[]
  }
  return a.flat().filter(e=>e.length<n.length).map(e=>+e.join``).filter(e=>m%e===0).length
}

console.log(getCount(1111111111))