const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

function replaceLetters(s) {
  return [...s].map(e=>{
    if(e.match(/a|e|u|o|i/)){
      for(let i=alphabet.indexOf(e);;i--){
        if(i===-1)i=25
        if(!alphabet[i].match(/a|e|u|o|i/))return alphabet[i]
      }
    }
    for(let i=alphabet.indexOf(e);;i++){
      if(i===26)i=0
      if(alphabet[i].match(/a|e|u|o|i/))return alphabet[i]
    }
  }).join``
 }

console.log(replaceLetters('abcdtuvwxyz'))