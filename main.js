function findNum(s){
  return ['zero','one','two','three','four','five','six','seven','eight','nine','ten'].map((e,i)=>s.toLowerCase().replace(/[^a-z]/g,'').match(e)?i:'').filter(e=>e)[0]||0
}

console.log(findNum("To avoid the calf, I veered sharply to the left."))
console.log(findNum("The robins love hiding amongst the smooth reeds."))
console.log(findNum("It's always worth looking after your friends, even if they've upset you."))