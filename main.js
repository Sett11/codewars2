function askForMissingDetails(list) {
  return list.map(el=>{
    for(let i in el){
      if(el[i]===null){
        return el
      }
    }
  }).map(el=>{
    for(let i in el){
      if(el[i]===null){
        el.question = `Hi, could you please provide your ${i}.`
      }
    }
    return el
  }).filter(el=>el!==undefined)
}

console.log(askForMissingDetails([
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]))