function isSumOfCubes(s){
  s = s.replace(/\D/g, ' ').split` `.filter(el=>el!=='').map((el)=>{
    if(el.length<4){
      return el
    } else{
      const arr = []
      for(let i = 0; i < el.length; i+=3){
        arr.push(el.slice(i,i+3))
      }
      return arr
    }
  }).join` `.replace(/,/g, ' ').split` `
  const db = s.map((el)=>{
    return [el, el.split``.map(Number).map(ul=>ul**3).reduce((acc,curr)=>acc+curr,0)]
  }).filter(el=>el[0]==el[1]).map(el=>el[1])
  return db.length === 0 ? 'Unlucky' : `${db.join` `} ${db.reduce((acc,curr)=>acc+curr,0)} Lucky`
}
console.log(isSumOfCubes("&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1"))