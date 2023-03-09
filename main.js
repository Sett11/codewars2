function findHobbitsIn(a){
  return a.map(e=>{
    if(e.race){
        if(e.race.toLowerCase().match(/hobbit/gi)||e.race.toLowerCase().match(/halfling/gi))return e
    }
    if(e.home){
        if(e.home.toLowerCase().match(/hobbiton/gi)||e.home.toLowerCase().match(/shire/gi)||e.home.toLowerCase().match(/farthing/gi))return e
    }
    return '&'
  }).filter(e=>e!=='&')
}

console.log(findHobbitsIn([ { name: 'Loen', race: 'Hobbit', home: ' ' },
{ name: 'Dwalin', race: 'Dwarve', home: 'the mountain' },
{ name: 'Oen', race: null, home: 'hobbiton' },
{ name: 'Joe', race: 'Human', home: 'Bree' } ]))