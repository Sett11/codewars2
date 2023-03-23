var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  }

Object.prototype.hash = function(s){
    s=s.split`.`,str='this'
    for(let i=0;i<s.length;i++){
        if(!JSON.stringify(this).match(s[i]))return undefined
        str+=`['${s[i]}']`
    }
  return eval(str)||undefined
}


console.log(obj.hash('person.game.home'))

