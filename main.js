function sayMeOperations(s,c='') {
  const f=(x,y,z)=>x+y===z?'addition':x-y===z?'subtraction':x*y===z?'multiplication':'division'
  s=s.split` `.map(Number)
  for(let i=0;i<s.length-2;i++){
    c+=f(s[i],s[i+1],s[i+2])+', '
  }
  return c.slice(0,c.length-2)
}
console.log(sayMeOperations("10 2 5 -3 -15 12"))