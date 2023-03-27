function dropWhile(b,f,a=b.slice()){
  for(let i=0;i<a.length;i++){if(f(a[i])){a.splice(i,1);i--}else return a}
  return []
}

console.log(dropWhile([2,4,6,8,1,2,5,4,3,2],e=>e%2===0))