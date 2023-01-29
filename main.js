function sc(words){
  words = words.replace(/[^a-zA-Z\s]/g,'').split` `
  const obj = {}
  let counter = 0
  for(let i of words){
    i=i.toLowerCase()
    if(!obj[i]){
      obj[i]=i
      counter+=i.length
    }else{
      counter+=1
    }
  }
  return counter
}
console.log(sc("Hello World!"))