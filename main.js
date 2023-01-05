function isolateIt(arr){
  return arr.map((el)=>{
    if(el.length % 2 === 0){
      el = el.slice(0, ~~el.length/2)+'|'+el.slice(~~el.length/2)
      return el
    }else{
      el = el.slice(0,~~el.length/2)+'|'+el.slice(Math.ceil(el.length/2))
      return el
    }
  })
}
console.log(isolateIt(["abcde","fghij", 'kkkk']))