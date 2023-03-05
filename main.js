function treasureCode(s) {
    s=s.replace(/\d+/g,'-$&-').split`-`.map(e=>+e===+e?+e:e).filter(e=>e),c=0,newS=s.filter(e=>typeof e==='number')
    for(let i=0;i<Math.max(...newS);i++){
        if(newS.every(e=>e%i===0))c=Math.max(c,i)
    }return s.map(e=>typeof e==='number'?e/c:e).join``
}
  console.log(treasureCode("Y14U7I7P21"))