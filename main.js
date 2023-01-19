function getNiceNames(people){
    return people.map(el=>el.wasNice ? el.name : null).filter(el=>el!==null)
  }
  
  function getNaughtyNames(people){
    return people.map(el=>!el.wasNice ? el.name : null).filter(el=>el!==null)
  }

  console.log(getNaughtyNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
]))