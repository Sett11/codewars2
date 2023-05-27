function getWinner(a,o={}){
  for(let i=-1;++i<a.length;){
    if(o[a[i]])o[a[i]]+=1
    else o[a[i]]=1
    if(o[a[i]]>a.length/2)return a[i]
  }
  return null
}
console.log(getWinner(["A", "A", "A", "B", "B", "B", "A"]))