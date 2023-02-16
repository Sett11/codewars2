sc=n=>{
    a=[]
  for(i=1;i<=n;i++){if(n%i==0)a.push(i)}n=n.toString(2)
  return a.filter(e=>n.includes(e.toString(2)))
}
console.log(sc(100))