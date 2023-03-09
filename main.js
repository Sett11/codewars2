shortener=m=>{
    if(!m.includes(' '))return m
    if(m.length<=160)return m
    while(m.length>160){
      m=m.slice(0,m.lastIndexOf(' '))+m.charAt(m.lastIndexOf(' ')+1).toUpperCase()+m.slice(m.lastIndexOf(' ')+2)
      if(!m.includes(' '))return m
    }
    return m
  }

console.log(shortener('No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.'))
console.log(shortener('SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.'))