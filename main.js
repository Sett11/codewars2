function toCamelCase(s,n){
   s=s.split` `.map(e=>n===1?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():n===2?e.slice(0,-1).toLowerCase()+e.charAt(e.length-1).toUpperCase():e.charAt(0).toUpperCase()+e.slice(1,-1).toLowerCase()+e.charAt(e.length-1).toUpperCase()).join``
   return s.charAt(0).toLowerCase()+s.slice(1,-1)+s.charAt(s.length-1).toLowerCase()
}
  
  console.log(toCamelCase("hello world",2))