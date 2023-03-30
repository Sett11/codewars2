function findMaxRange(a,c=0){
   a=a.map((e,i)=>{
    e=[e,i,e.split` `.map(Number).filter(e=>e===e)]
    e[2]=Math.abs(e[2][1]-e[2][0])
    return e
   }).sort((a,b)=>b[2]-a[2]||a[1]-b[1])
   a.forEach(e=>c=Math.max(e[2],c))
   return a.filter(e=>e[2]===c).map(e=>e[0])
  }

  console.log(findMaxRange(["from 1 to 10","from 10.1 to 1","from -1 to -10"]))