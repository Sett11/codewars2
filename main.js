sc=w=>{
  w = w.replace(/[^a-zA-Z\s]/g,'').split` `
   o = {}
   c = 0
  for( i of w){
    i=i.toLowerCase()
    if(!o[i]){
      o[i]=i
      c+=i.length
    }else{
      c+=1
    }
  }
  return c
}
console.log(sc("Hello World!"))