add=(n,f=x=>add(n+x))=>{
  f.valueOf=()=>n
  return f
}

console.log(add(3)(5)(8)(7))