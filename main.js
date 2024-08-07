function LCA(n1,n2){
  let one=[],two=[],i=0
  const f=x=>{
    if(!x)return
    !i?one.push(x.id):two.push(x.id)
    f(x.up)
  }
  f(n1)
  i+=1
  f(n2)
  for(let i=-1;++i<one.length;)for(let j=-1;++j<two.length;)if(one[i]==two[j])return one[i]
}