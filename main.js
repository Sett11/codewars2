function sumGroups(a){
  const f=x=>{for(let i=0;i<x.length-1;i++){if(x[i]%2===0&&x[i+1]%2===0||x[i]%2!==0&&x[i+1]%2!==0)return false}return true}
  for(let i=0;i<a.length;i++){
    if(a[i]%2===0&&a[i+1]%2===0){
      for(let j=i;j<a.length+1;j++){
        if(a[j]%2!==0){
          a=a.slice(0,i).concat([a.slice(i,j).reduce((a,c)=>a+c,0)]).concat(a.slice(j))
          break
        }
        if(j===a.length-1&&a[j]%2===0){
          a=a.slice(0,i).concat([a.slice(i,j+1).reduce((a,c)=>a+c,0)])
          break
        }
      }
    }
    if(a[i]%2!==0&&a[i+1]%2!==0){
      for(let j=i;j<a.length+1;j++){
        if(a[j]%2===0){
          a=a.slice(0,i).concat([a.slice(i,j).reduce((a,c)=>a+c,0)]).concat(a.slice(j))
          break
        }
        if(j===a.length-1&&a[j]%2!==0){
          a=a.slice(0,i).concat([a.slice(i,j+1).reduce((a,c)=>a+c,0)])
          break
        }
      }
    }
  }
  if(f(a))return a.length
  return sumGroups(a)
}

console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 3, 3, 3, 9, 2]))